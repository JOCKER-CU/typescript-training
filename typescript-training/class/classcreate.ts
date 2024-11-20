class customer {
    firstname: string;
    lastname: string;
    
    constructor(theFirst: string, theLast: string){
this.firstname = theFirst;
this.lastname= theLast;
    }
}

// let's create an instance

let myCustomer = new customer("Aung ", "Zaw");

// myCustomer.firstname = "Han";
// myCustomer.lastname = "Naung Soe";

console.log(myCustomer.firstname);
console.log(myCustomer.lastname);