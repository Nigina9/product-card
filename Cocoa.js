import { Drink } from "./Drink.js";
export class Cocoa extends Drink {
    constructor(name, volume, price, temperature, brand) {
        super(name, volume, price, temperature);
        this.brand = brand;
    }
}