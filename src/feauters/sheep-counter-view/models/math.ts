export class Size {
    constructor(    
        public height: number,
        public widht: number
    ){ }
}


export class RealativeCoordinate implements ICoordinate {
    getValue(widht: number, height: number): number {
        throw new Error("Method not implemented.")
    }

}

export class AbsoluteCoordinate implements ICoordinate {
    private _value: number

    public constructor(value: number){
        this._value = value
    }

    getValue(widht: number, height: number): number {
        return this._value
    }

}

export interface ICoordinate {
    getValue(widht: number, height: number): number
}

export class RealativePosition implements IPosition {
    constructor(
        public absolute: IPosition,
        public offset: IPosition
    ){

    }
    get x(): number {
        throw new Error("Method not implemented.")
    }
    get y(): number {
        throw new Error("Method not implemented.")
    }
    get deg(): number {
        throw new Error("Method not implemented.")
    }
}

export class Position implements IPosition {
    private _x: number
    private _y: number
    private _deg: number

    constructor(
        x:number, 
        y: number, 
        deg: number
    ){ 
        this._x = x 
        this._y = y
        this._deg = deg
    }

    public x(widht: number, height: number): number {

    }
    public y(widht: number, height: number): number {

    }
    public deg(widht: number, height: number): number {

    }
}


export interface IPosition{
    x(widht: number, height: number): number
    y(widht: number, height: number): number
    deg(widht: number, height: number): number
}