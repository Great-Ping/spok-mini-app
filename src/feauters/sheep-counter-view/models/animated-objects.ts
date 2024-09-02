import type { NumberLiteralType } from "typescript";
import {Size, Position } from "./math"

export class AnimatedText{
    constructor(
        public text: string,
        public fontSize: number,
        public fontWeight: number,
        public position: Position
    ) {}
}

export class AnimatedSheep{
    constructor(
        public image: HTMLImageElement,
        public size: Size,
        public position: Position
    ) {}
}

