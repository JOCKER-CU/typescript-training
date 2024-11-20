"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
    constructor(animalName) {
        super(animalName);
        this.animalName = animalName;
    }
    latpay() {
        console.log("lat Pay");
    }
    getInfo() {
        return super.getInfo() + ` , Here is dog class`;
    }
}
exports.Dog = Dog;
