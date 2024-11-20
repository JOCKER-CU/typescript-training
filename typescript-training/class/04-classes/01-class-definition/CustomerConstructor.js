"use strict";
class CustomerConstructor {
    constructor(theFirst, theLast) {
        this.nameOne = theFirst;
        this.nameTwo = theLast;
    }
}
let customerName = new CustomerConstructor("James", "Collin");
console.log(customerName.nameOne + customerName.nameTwo);
