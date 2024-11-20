export class Crew {
    public get theTwo(): string {
        return this._theTwo;
    }
    public set theTwo(value: string) {
        this._theTwo = value;
    }
    public get theOne(): string {
        return this._theOne;
    }
    public set theOne(value: string) {
        this._theOne = value;
    }
    constructor(private _theOne: string, private _theTwo: string){

    }
}