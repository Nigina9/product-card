// Задание № 1
const showTemperatureInConsole = (country, temperature) => {
    console.log(`Сейчас в ${country} температура  — ${temperature} градусов по Цельсию`);
}
showTemperatureInConsole("Ереване", 20);
showTemperatureInConsole("Москвe", 15);
showTemperatureInConsole("Лондоне", 5);

// Задание № 2
const SPEED_OF_SOUND = 343;
const compareSpeed = (speed) => {
    if (speed > SPEED_OF_SOUND) {
        console.log('Сверхзвуковая скорость')
    } else if (speed === SPEED_OF_SOUND) {
        console.log('Звуковая скорость')
    } else {
        console.log('Дозвуковая скорость')
    }
};
compareSpeed(500);
compareSpeed(300);
compareSpeed(343);

// Задание №3
const laptop = "Ноутбук";
let priceLaptop = 35000;
const buyLaptop = (budget) => {
    if (budget >= priceLaptop) {
        console.log(`${laptop} приобретён. Спасибо за покупку`)
    } else {
        console.log(`Вам не хватает ${priceLaptop - budget}$, пополните баланс`)
    }
}
buyLaptop(30000);
buyLaptop(36000);
buyLaptop(13000);

const greetMessage = (name, counry, age) => {
    console.log(`Привет дорогой друг! Меня зовут ${name}, я из ${counry}, мне ${age} лет !`)
};
greetMessage("Нигина", "Москвы", 28);

let shop = "Пятерочка";
let counter = 35;
let randomNumber = 75;

