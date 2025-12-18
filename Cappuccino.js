import { Drink } from "./Drink.js";
export class Cappuccino extends Drink {
    constructor(name, volume, price, temperature, grainGrade) {
        super(name, volume, price, temperature);
        this.grainGrade = grainGrade;
    }

    showgrainGrade() {
        console.log(`При приготовлении кофе мы используем сорт ${this.grainGrade}`);
    }
}