import { Animal } from "./Animal";
import { Cannie } from "./Cannie";

export class Dog extends Animal implements Cannie {
    constructor(private animalName: string) {
        super(animalName);
    }
    latpay() {
       console.log("lat Pay");
    }
    
    getInfo(): string {
        return super.getInfo() + ` , Here is dog class`;
    }

}