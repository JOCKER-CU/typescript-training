export class Human {

    constructor(private _firstName: string, private _Name: string ){

    }
    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._Name;
    }
    public set lastName(value: string) {
        this._Name = value;
    }
}