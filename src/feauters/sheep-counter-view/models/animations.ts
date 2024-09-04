import { AnimatedText, AnimatedSheep } from "./animated-objects"
import { NormalEvent } from "@/shared/models"

type AnimatonCompletedEvent<T> = NormalEvent<(target: T) => void> 

export interface IAnimation<T> {
    get isPlaying(): boolean
    get onCompleted(): AnimatonCompletedEvent<T> 
    nextState(timeSpan: number): void
}

export abstract class BaseAnimation<T> implements IAnimation<T> {
    private _completedEvent: AnimatonCompletedEvent<T> 

    public animatedObject: T
    public isPlaying: boolean

    constructor(animatedObject: T){
        this.animatedObject = animatedObject
        this.isPlaying = true
        this._completedEvent = new NormalEvent()

    }
 
    get onCompleted(): AnimatonCompletedEvent<T> {
        return this._completedEvent
    }

    abstract nextState(timeSpan: number): void

    protected run(){
        this.isPlaying = true
    }

    protected complite(){
        this.isPlaying = false
        this._completedEvent.invoke({target: this.animatedObject});
    }

}


export class TextDisappearingAnimation extends BaseAnimation<AnimatedText> {
    nextState(timeSpan: number): void {
        this.complite()
    }
}


export class NumberDisappearingAnimation extends BaseAnimation<AnimatedText> {
    nextState(timeSpan: number): void {
        this.complite()
    }
}

export class SheepAppearanceAnimation extends BaseAnimation<AnimatedSheep> {
    nextState(timeSpan: number): void {
        this.complite()
    }
}

export class SheepDisappearanceAnimation extends BaseAnimation<AnimatedSheep>{
    nextState(timeSpan: number): void {
        this.complite()
    }
}

export class Animator {
    private _playingAnimations: Array<IAnimation<any>>
    private _animationLoopIsRunning: Boolean;
    private _redraw: () => void;

    constructor(redraw: () => void){
        this._animationLoopIsRunning = false;
        this._redraw = redraw;
        this._playingAnimations = []
    }


    private recAnimationLoop(lastTimeStamp: number){
        let now = performance.now()
        let timeSpan = lastTimeStamp - now;

        this._playingAnimations.forEach((ainmation) =>{
            ainmation.nextState(timeSpan)
        })
        console.log(this._redraw)
        this._redraw()
        
        this._playingAnimations = this._playingAnimations.filter(x => x.isPlaying)
        if (this._playingAnimations.length == 0){
            this._animationLoopIsRunning = false;
            return;
        }   
        requestAnimationFrame(() => this.recAnimationLoop(now))
    }
    
    private runAnimationLoop(){
        if(this._animationLoopIsRunning)
            return;
        this._animationLoopIsRunning = true;
        
        let now = performance.now();
        requestAnimationFrame(() => this.recAnimationLoop((now)));
        
    }

    public runAnimation(animation: IAnimation<any>){
        this._playingAnimations.push(animation)
        this.runAnimationLoop()
    }
}


