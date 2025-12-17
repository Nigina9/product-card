import { Cappuccino, Cocoa, Tea } from './Drink.js';
import { Cafe } from './Cafe.js'
const cappuccino = new Cappuccino('Капучино', 400, 355, 70, 'Арабика');
const cocoa = new Cocoa('Какао', 250, 267, 90, 'Красный Октябрь');
const tea = new Tea('Чай', 100, 130, 95, 'зеленый');
const cafe = new Cafe('Шоколадница', 'г. Москва, ул. Красная площадь, дом.3');
console.log(cafe.getInfoCafe());
cafe.order(tea);
console.log(cappuccino.getInfo());
cafe.order(cocoa);
console.log(cocoa.getInfo());
cafe.order(cappuccino);
console.log(cappuccino.getInfo());