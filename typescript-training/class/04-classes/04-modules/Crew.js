"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crew = void 0;
class Crew {
    get theTwo() {
        return this._theTwo;
    }
    set theTwo(value) {
        this._theTwo = value;
    }
    get theOne() {
        return this._theOne;
    }
    set theOne(value) {
        this._theOne = value;
    }
    constructor(_theOne, _theTwo) {
        this._theOne = _theOne;
        this._theTwo = _theTwo;
    }
}
exports.Crew = Crew;
