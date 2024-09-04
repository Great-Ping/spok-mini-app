import { AnimatedSheep, AnimatedText } from "./animated-objects";
import {
    Animator, 
    NumberDisappearingAnimation, 
    SheepAppearanceAnimation, 
    SheepDisappearanceAnimation, 
    TextDisappearingAnimation 
} from "./animations";

import { Position, Size } from "./math";

type StateChanged = (newState: SheepCounterCanvasView) => void

export class SheepCounterCanvasView {
    private _animator: Animator
    private _clicks: number
    private _sheepImage: HTMLImageElement
    private _context: CanvasRenderingContext2D

    public title: AnimatedText
    public description: AnimatedText
    public numbers: Array<AnimatedText>
    public sheeps: Array<AnimatedSheep>

    constructor(context: CanvasRenderingContext2D) {
        this._animator = new Animator(() => this.draw())
        this._context = context;
        this._clicks = 0
        this._sheepImage = new Image();
        this._sheepImage.src = "/images/sheep-counter/sheep.png"

        this.title = new AnimatedText(
            "Счётчик \nовечек...",
            32, 800,
            new Position(0, 100, 0)
        )
        this.description = new AnimatedText(
            "Считай бесконечных овечек, чтобы лучше уснуть. ",
            16, 600,
            new Position(0, 0, 0)
        )
        this.numbers = [
            new AnimatedText(
                "Нажимай на экран и считай овечек. ",
                16, 600,
                new Position(0, 200, 0)
            )
        ]
        this.sheeps = [
            new AnimatedSheep(
                this._sheepImage,
                new Size(100, 100),
                new Position(100,100,0)
            )
        ]
    }

    public get count(): number{
        return this._clicks
    } 

    public set count(value){
        this._clicks = value;
    }

    increment(){
        if (this._clicks == 0 ){
            let animation = new TextDisappearingAnimation(this.description)
            animation.onCompleted.addListener(() => {
                this.description.isVisible = false
            })
            this._animator.runAnimation(animation)
            
            animation = new TextDisappearingAnimation(this.title);
            animation.onCompleted.addListener(() => {
                this.title.isVisible = false
            })
            this._animator.runAnimation(animation)
        }

        if (this.numbers.length < 1){
            return
        }

        const lastNumber = this.numbers[this.numbers.length - 1];
        const firstNumber = this.numbers[0];

        let incrementedClicks = this._clicks + 1;

        this.numbers.unshift(new AnimatedText(
            incrementedClicks.toString(),
            firstNumber.fontSize,
            firstNumber.fontWeight,
            firstNumber.position
        ))

        let removeNumberAnimation = new NumberDisappearingAnimation(lastNumber);
        removeNumberAnimation.onCompleted.addListener(() => this.numbers.pop());
        this._animator.runAnimation(removeNumberAnimation)
        
        let disappearanceSheep = this.sheeps[0];
        let appearanceSheep = new AnimatedSheep(
            this._sheepImage,
            disappearanceSheep.size,
            new Position(0, 0, 0)
        );
        this.sheeps.unshift(appearanceSheep)

        let appearanceAnimation = new SheepAppearanceAnimation(appearanceSheep)
        let disappearanceAnimation = new SheepDisappearanceAnimation(disappearanceSheep)

        disappearanceAnimation.onCompleted.addListener(() => this.sheeps.pop())

        this._animator.runAnimation(appearanceAnimation)
        this._animator.runAnimation(disappearanceAnimation)
        
        this._clicks = incrementedClicks;
    }

    resize(width: number, height: number){
        
        
    }

    draw() {
        let context = this._context;
        let canvas = context.canvas;
        
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#fff"

        this.sheeps.forEach((sheep) => {
            context.translate(
                sheep.position.x,
                sheep.position.y
            );
            context.rotate(sheep.position.deg);
            
            context.drawImage(
                sheep.image, 
                - sheep.size.widht / 2, 
                - sheep.size.height / 2,
                sheep.size.widht, 
                sheep.size.height
            )
            
            context.rotate(-sheep.position.deg);
            context.translate(
                sheep.position.x,
                sheep.position.y
            );
        })
        
        this.numbers.forEach((number) => {
            context.font = `${number.fontWeight} ${number.fontSize}px Open Sans`
            context.fillText(number.text, number.position.x, number.position.y);
        })
        
        let canBeNullStrings = [this.description, this.title];
        canBeNullStrings
            .filter((text) => text.isVisible)
            .forEach((text) => {
                context.font = `${text.fontWeight} ${text.fontSize}px Open Sans`
                context.fillText(text.text, text.position.x, text.position.y);
            })
    }
}