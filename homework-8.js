import {productCards} from "./product-cards.js";
// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.
const productCardsList = document.querySelector('.product-list');
const productCardTemplate = document.querySelector('#product-card-template');
productCards.forEach(card => {
    const productCardClone = productCardTemplate.content.cloneNode(true);
    productCardClone.querySelector('#img').src = card.url;
    productCardClone.querySelector('#img').alt = card.alt;
    productCardClone.querySelector('#title').innerHTML = card.productTitle;
    productCardClone.querySelector('#description').textContent = card.description;
    productCardClone.querySelector('#compound-element-one').textContent = card.compoundElementOne;
    productCardClone.querySelector('#compound-element-two').textContent = card.compoundElementTwo;
    productCardClone.querySelector('#compound-element-three').textContent = card.compoundElementThree;
    productCardClone.querySelector('#price').innerHTML = card.price;
    productCardsList.appendChild(productCardClone);
});
// 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой
getProductCardTitle = productCards.reduce((acc, title) => {
    acc.push(title.productTitle);
    return acc;
}, []);
const productCardTitleString = getProductCardTitle.join(';');
// 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
const getProductCardArray = productCards.reduce((acc, card) => {
    acc.push({[card.productTitle]: card.description});
    return acc;
}, []);
