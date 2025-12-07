import {productCards} from "./product-cards.js";
// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.
const createProductCards = (cards = productCards) => {
    const productCardList = document.querySelector('.product-list');
    const productCardTemplate = document.querySelector('#product-card-template');
    productCardList.innerHTML = '';
    cards.forEach(card => {
        const productCardClone = productCardTemplate.content.cloneNode(true);
        const productImg = productCardClone.querySelector('.product-card__img');
        productImg.src = `images/${card.img}.jpg`;
        productImg.alt = card.name;
        productCardClone.querySelector('.product-card__product-title').innerHTML = card.name;
        productCardClone.querySelector('.product-card__description').textContent = card.description;
        const compoundList = productCardClone.querySelector('.compound-list');
        card.compound.forEach(element => {
            const newElement = document.createElement('li');
            newElement.classList.add('compound-list__item');
            newElement.textContent = element;
            compoundList.appendChild(newElement);
        });
        productCardClone.querySelector('#product-price').innerHTML = `${card.price.toLocaleString()} &#8381`;
        productCardList.appendChild(productCardClone);
    })
};
// 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой
const getProductCardTitle = productCards.reduce((acc, title) => {
    acc.push(title.productTitle);
    return acc;
}, []);
const productCardTitleString = getProductCardTitle.join(';');
// 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
const getProductCardArray = productCards.reduce((acc, card) => {
    acc.push({[card.productTitle]: card.description});
    return acc;
}, []);
// 6*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество. Должна быть защита от введенных других значений (имеется ввиду проверка if).P.S - код из задания №3 переместить в функцию, не нужно его дублировать
const displayСards= () => {
    const answer = prompt("Сколько карточек вам показать?");
    const numbers = Number(answer);
    if (numbers >= 1 && numbers <= 5) {
        createProductCards(productCards.slice(0, numbers));
    } else {
        alert('Попробуйте еще раз')
    }
};
displayСards();
