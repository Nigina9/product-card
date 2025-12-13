class CosmeticProduct {
    constructor(name, brand, volume, price) {
        this.name = name;
        this.brand = brand;
        this.volume = volume;
        this.price = price;
    }
    showInfo() {
        console.log(this.name, this.brand, this.volume, this.price);
    }
}
class Cream extends CosmeticProduct {
    constructor(name, brand, volume, price, skinType,  shelfLifeMonths) {
        super(name, brand, volume, price);
        this.skinType = skinType;
        this. shelfLifeMonths =  shelfLifeMonths;
    }
    showDescription(){
        console.log(`Этот продукт предназначен для ${this.skinType} кожи`)
    }
    showPrice(){
        console.log(`Стоимость продукта составляет ${this.price} рублей`)
    }
    showExpirationDate(){
        console.log(`Срок годность продукта ${this.shelfLifeMonths} месяца`)
    }
};
const dayCream = new Cream ('Nivea Care Ультралегкий крем', 'Nivea', 50, 380, 'сухой', 24)
dayCream.showDescription();
dayCream.showPrice();
dayCream.showExpirationDate();