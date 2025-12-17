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

    givedrink() {
        this.#makeDrink;
        console.log(`Ваш ${this.name} готов, c вас ${this.price} рублей`);
    }
}

export class Cappuccino extends Drink {
    constructor(name, volume, price, temperature, grainGrade) {
        super(name, volume, price, temperature);
        this.grainGrade = grainGrade;
    }

    showgrainGrade() {
        console.log(`При приготовлении кофе мы используем сорт ${this.grainGrade}`);
    }
}

export class Cocoa extends Drink {
    constructor(name, volume, price, temperature, brand) {
        super(name, volume, price, temperature);
        this.brand = brand;
    }
}

export class Tea extends Drink {
    constructor (name, volume, price, temperature, typeTea) {
        super(name, volume, price, temperature);
        this.typeTea = typeTea;
    }
}
