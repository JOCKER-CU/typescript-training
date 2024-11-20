class Customer {
    first!: string;
    last!: string;
}

//create an instance
let customers = new Customer();

customers.first = "Tom";
customers.last = "Hanks";

console.log(customers.first);
console.log(customers.last);