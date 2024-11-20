"use strict";
class P {
    get theLast() {
        return this._theLast;
    }
    set theLast(value) {
        this._theLast = value;
    }
    get theFirst() {
        return this._theFirst;
    }
    set theFirst(value) {
        this._theFirst = value;
    }
    constructor(_theFirst, _theLast) {
        this._theFirst = _theFirst;
        this._theLast = _theLast;
    }
}
let p = new P("Denial", "Semual");
console.log(p.theFirst);
console.log(p.theLast);
