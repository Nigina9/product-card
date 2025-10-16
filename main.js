// Мои задачи:
// 1.Переписать и проанализировать задачу с перекрашиванием первой карточки
// 2. Переписать и проанализировать задачу с перекрашиванием всех карточек
// 3. Переписать и проанализировать задачу с открытием Google
// 4. Используя слушатели событий, сделать так, что бы при наведении на главный заголовок ("Выбери свой продукт") - он выводился в консоль.
// 5. Добавить кнопку, при нажатии на которую мы будем менять её цвет с одного на другой. При повторном нажатии цвет меняется с второго на первый. Цвета выбираем по желанию.

// 1.Перекрашиваем первую карточку
const changeColorButtonCard = document.querySelector('.button-card');
const productCard = document.querySelector('.product-card');
const colorChangePink = "#e5bce1";
const colorChangeViolet = "#cacaf4";

changeColorButtonCard.addEventListener('click', () => {
    productCard.style.background = colorChangePink;
});

// 2. Перекрашиваем все карточки
const changeColorButtonCardAll = document.querySelector('.button-cards');
const productCardAll = document.querySelectorAll('.product-card');

changeColorButtonCardAll.addEventListener('click', () => {
    productCardAll.forEach((card) => card.style.background = colorChangeViolet);
});
// 3. Открываем Google
const openButtonGoogle = document.querySelector('#open-google');
openButtonGoogle.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть эту страницу?');
    if (answer === true) {
        window.open('https://www.google.com/?hl=ru');
    } else {
        return;
    }
};
// 4. Вывод консоль лог 
const titlePager = document.querySelector('.title-pager');

titlePager.addEventListener('mouseover', () => outputConsoleLog('Выбери свой продукт'));

function outputConsoleLog(message) {
    console.log(message);
}
// 5.При клике меняет цвет кнопки
const changeColorButton = document.querySelector('#change-color-button');
changeColorButton.addEventListener('click', () => {
    changeColorButton.classList.toggle('button--color');
})