import { Drink } from "./Drink.js";
export class Tea extends Drink {
    constructor (name, volume, price, temperature, typeTea) {
        super(name, volume, price, temperature);
        this.typeTea = typeTea;
    }
}