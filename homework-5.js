// Задание № 1
const showMessage = (country, temperature) => {
    console.log(`Сейчас в ${country} температура  — ${temperature} градусов по Цельсию`);
}
showMessage("Ереване", 20);
showMessage("Москвe", 15);
showMessage("Лондоне", 5);

// Задание № 2
const SPEED_OF_SOUND = 343;
const checkSound = (sound) => {
    if (sound > SPEED_OF_SOUND) {
        console.log('Сверхзвуковая скорость')
    } else if (sound === SPEED_OF_SOUND) {
        console.log('Звуковая скорость')
    } else {
        console.log('Дозвуковая скорость')
    }
};
checkSound(500);
checkSound(300);
checkSound(343);

// Задание №3
const laptop = "Ноутбук";
let priceLaptop = 35000;
const checkBudget = (budget) => {
    if (budget >= priceLaptop) {
        console.log(`${laptop} приобретён. Спасибо за покупку`)
    } else {
        console.log(`Вам не хватает ${priceLaptop - budget}$, пополните баланс`)
    }
}
checkBudget(30000);
checkBudget(36000);
checkBudget(13000);

const greetMessage = (name, counry, age) => {
    console.log(`Привет дорогой друг! Меня зовут ${name}, я из ${counry}, мне ${age} лет !`)
};
greetMessage("Нигина", "Москвы", 28);

let shop = "Пятерочка";
let counter = 35;
let randomNumber = 75;