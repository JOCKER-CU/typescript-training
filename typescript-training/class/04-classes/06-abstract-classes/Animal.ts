export class Animal {
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    constructor(private _name: string){

    }
    
    getInfo():string {
        return `the name is ${this._name}`;
    }
}