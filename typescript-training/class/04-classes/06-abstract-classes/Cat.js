"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const Animal_1 = require("./Animal");
class Cat extends Animal_1.Animal {
    constructor(theCat) {
        super(theCat);
        this.theCat = theCat;
    }
    getInfo() {
        return super.getInfo() + ` , This is cat class`;
    }
}
exports.Cat = Cat;
