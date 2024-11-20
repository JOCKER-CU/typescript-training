class P {
    public get theLast(): string {
        return this._theLast;
    }
    public set theLast(value: string) {
        this._theLast = value;
    }
    public get theFirst(): string {
        return this._theFirst;
    }
    public set theFirst(value: string) {
        this._theFirst = value;
    }
    constructor(private _theFirst: string, private _theLast: string){

    }

}

let p = new P("Denial", "Semual");

console.log(p.theFirst);
console.log(p.theLast);