class Person {

    constructor(private firstname : string ,private lastname : string){

    }

    get fullName() {
        return `${this.firstname} ${this.lastname}`
    }

    private _age: number = 0

    get age() {
        return this._age
    }

    set age(value: number){
        if(value > 0){
            this._age = value
        }
        
    }
    
    greet() {
        console.log(`My name is ${this.fullName} and My age is ${this.age}`)
    }
}

let person = new Person("Thida", " Aung");
person.age = 20;
person.greet();