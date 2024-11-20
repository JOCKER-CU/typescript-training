class NameOfPeople {
    private _first!: string;
    private _last!: string;

    public get last(): string {
        return this._last;
    }
    public set last(value: string) {
        this._last = value;
    }
    
    constructor(theFirst:string , theLast:string){
        this._first = theFirst;
        this._last = theLast;
    }

    public get getFirst():string {
        return this._first;
    }

    public set setFirst(value: string){
        this._first = value;
    }
}

//create an instance
let peopleName = new NameOfPeople("James", "Bonds");


console.log(peopleName.getFirst);
console.log(peopleName.last);