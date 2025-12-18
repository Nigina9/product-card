export class Cafe {
    constructor(name, adress) {
        this.name = name;
        this.adress = adress;
    }

    getInfoCafe() {
        return `Кафе ${this.name}, адрес: ${this.adress}`;
    }

    orderDrink(drink) {
        drink.presentDrink();
    }

}