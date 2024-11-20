import { Animal } from "./Animal";

export class Cat extends Animal{

    constructor(private theCat:string){
        super(theCat);
    }

    getInfo(): string {
        return super.getInfo() + ` , This is cat class`;
    }
}