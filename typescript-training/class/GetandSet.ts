class Name {
    private _firstName!: string;
    private _lastName!: string;

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }
}

let myCust = new Name();
myCust.firstName = "Susan";

console.log(myCust.firstName)