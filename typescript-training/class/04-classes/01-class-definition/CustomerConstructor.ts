class CustomerConstructor{
    nameOne!: string;
    nameTwo!: string;

    constructor(theFirst:string, theLast:string){
        this.nameOne = theFirst;
        this.nameTwo = theLast;
    }
}

let customerName = new CustomerConstructor("James", "Collin");

console.log(customerName.nameOne + customerName.nameTwo)