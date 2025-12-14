// 1.Перекрашиваем первую карточку
const changeColorFirstCardButton = document.querySelector('.button-card');
const firstProductCard = document.querySelector('.product-card');
const colorChangePink = "#e5bce1";
const colorChangeViolet = "#cacaf4";

changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.background = colorChangePink;
});

// 2. Перекрашиваем все карточки
const changeColorAllCardButton = document.querySelector('.button-cards');
const allproductCards = document.querySelectorAll('.product-card');

changeColorAllCardButton.addEventListener('click', () => {
    allproductCards.forEach((card) => card.style.background = colorChangeViolet);
});
// 3. Открываем Google
const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть эту страницу?');
    if (answer === true) {
        window.open('https://www.google.com/?hl=ru');
    } else {
        return;
    }
};
// 4. Вывод консоль лог 
const mainTitle = document.querySelector('.main-title');

mainTitle.addEventListener('mouseover', () => outputConsoleLog(mainTitle.textContent));

function outputConsoleLog(message) {
    console.log(message);
};
// 5.При клике меняет цвет кнопки
const changeColorButton = document.querySelector('#change-color-button');
changeColorButton.addEventListener('click', () => {
    changeColorButton.classList.toggle('button--color-pink');
});