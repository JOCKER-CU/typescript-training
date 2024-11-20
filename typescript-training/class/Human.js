"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
class Human {
    constructor(_firstName, _Name) {
        this._firstName = _firstName;
        this._Name = _Name;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._Name;
    }
    set lastName(value) {
        this._Name = value;
    }
}
exports.Human = Human;
