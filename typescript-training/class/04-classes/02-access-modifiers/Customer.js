"use strict";
class NameOfPeople {
    get last() {
        return this._last;
    }
    set last(value) {
        this._last = value;
    }
    constructor(theFirst, theLast) {
        this._first = theFirst;
        this._last = theLast;
    }
    get getFirst() {
        return this._first;
    }
    set setFirst(value) {
        this._first = value;
    }
}
//create an instance
let peopleName = new NameOfPeople("James", "Bonds");
console.log(peopleName.getFirst);
console.log(peopleName.last);
