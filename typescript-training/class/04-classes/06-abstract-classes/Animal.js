"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    constructor(_name) {
        this._name = _name;
    }
    getInfo() {
        return `the name is ${this._name}`;
    }
}
exports.Animal = Animal;
