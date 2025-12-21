export class Drink {
    #temperature;
    constructor(name, volume, price, temperature) {
        this.name = name;
        this.volume = volume;
        this.price = price;
        this.#temperature = temperature;
    }

    getInfo() {
        return `Напиток: ${this.name}, Объем: ${this.volume} мл, Стоимость: ${this.price} рублей`;
    }

    getTemperature() {
        return this.#temperature;
    }

    #setTemperature(desiredTemperature) {
        this.#temperature = desiredTemperature;
    }

    #makeDrink() {
        console.log(`Готовим ваш ${this.name}`);
    }

    presentDrink() {
        this.#makeDrink;
        console.log(`Ваш ${this.name} готов, c вас ${this.price} рублей`);
    }
}
