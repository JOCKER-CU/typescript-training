"use strict";
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this._age = 0;
    }
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0) {
            this._age = value;
        }
    }
    greet() {
        console.log(`My name is ${this.fullName} and My age is ${this.age}`);
    }
}
let person = new Person("Thida", " Aung");
person.age = 20;
person.greet();
