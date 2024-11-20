"use strict";
class Name {
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
let myCust = new Name();
myCust.firstName = "Susan";
console.log(myCust.firstName);
