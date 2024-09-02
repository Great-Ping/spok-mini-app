import { AnimatedSheep, AnimatedText } from "./animated-objects";
import {
    Animator, 
    NumberDisappearingAnimation, 
    SheepAppearanceAnimation, 
    SheepDisappearanceAnimation, 
    TextDisappearingAnimation 
} from "./animations";

import { Position, Size } from "./math";

type StateChanged = (newState: SheepCounterView) => void

export class SheepCounterView {
    private _hasStateChanges: StateChanged; 
    private _animator: Animator
    private _clicks: number
    private _sheepImage: HTMLImageElement

    public title: AnimatedText | null
    public description: AnimatedText | null
    public numbers: Array<AnimatedText>
    public sheeps: Array<AnimatedSheep>

    constructor(hasStateChanges: StateChanged) {
        this._hasStateChanges = hasStateChanges
        this._animator = new Animator()
        this._clicks = 0
        this._sheepImage = new Image();
        this._sheepImage.src = "/images/sheep-counter/sheep.png"

        this.title = new AnimatedText(
            "Счётчик \nовечек...",
            32, 800,
            new Position(0, 0, 0)
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
                new Position(0, 0, 0)
            )
        ]
        this.sheeps = [
            new AnimatedSheep(
                this._sheepImage,
                new Size(50, 100),
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
            if (this.description != null)
                this._animator.runAnimation(new TextDisappearingAnimation(this.description))
            if (this.title != null)
                this._animator.runAnimation(new TextDisappearingAnimation(this.title))
        }

        console.log(this)

        if (this.numbers.length < 1)
            throw new Error("numbers not initialized")

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
        this._animator.runAnimation(new SheepAppearanceAnimation(appearanceSheep))
        this._animator.runAnimation(new SheepDisappearanceAnimation(disappearanceSheep))
        
        this._clicks = incrementedClicks;
    }
}