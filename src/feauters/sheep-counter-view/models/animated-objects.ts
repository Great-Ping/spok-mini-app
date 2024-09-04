import type { NumberLiteralType } from "typescript";
import {Size, type IPosition } from "./math"

export abstract class AnimatedObject{
    constructor(  
        public position: IPosition,
        public isVisible: boolean
    ){}
}

export class AnimatedText extends AnimatedObject{
    constructor(
        public text: string,
        public fontSize: number,
        public fontWeight: number,
        public position: IPosition,
        isVisible: boolean = true
    ){
        super(position, isVisible)
    }
}

export class AnimatedSheep extends AnimatedObject{
    constructor(
        public image: HTMLImageElement,
        public size: Size,
        public position: IPosition,
        isVisible: boolean = true
    ) {
        super(position, isVisible)
    }
}

