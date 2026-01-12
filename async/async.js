const deleteAllCardsButton = document.querySelector('#delete-button-all-cards');
const addAllCardsButton = document.querySelector('#add-button-all-cards');
const deleteOneCardButton = document.querySelector('#delete-button-card');
const downloadingText = document.querySelector('.message-data-download__text');
const usersList = document.querySelector('.users-list');

function renderCardsUsers(users) {
    usersList.innerHTML = '';
    users.forEach(card => {
        const userCardTemplate = document.querySelector('#user-card-template');
        const userCardClone = userCardTemplate.content.cloneNode(true);
        userCardClone.querySelector('.user-card__img').src = `/images/${ card.img }.jpg`;
        userCardClone.querySelector('.user-card__id').textContent = `ID: ${ card.id }`;
        userCardClone.querySelector('.user-card__name').textContent = `Имя: ${ card.name }`;
        userCardClone.querySelector('.user-card__surname').textContent = `Фамилия: ${ card.surname }`;
        userCardClone.querySelector('.user-card__email').textContent = `Эл.почта: ${ card.email }`;
        userCardClone.querySelector('.user-card__age').textContent = `Возраст:${ card.age }`;
        userCardClone.querySelector('.user-card__city').textContent = `Город: ${ card.city }`;
        usersList.appendChild(userCardClone);
    });
}

function saveUsersToStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getUsersFromStorage() {
    const data = localStorage.getItem('users');
    return data ? JSON.parse(data) : null;
}
async function fetchUsers() {
    try {
        const response = await fetch('users.json');
        const users = await response.json();
        saveUsersToStorage(users);
        return users;
    } catch (err) {
        downloadingText.textContent = 'Ошибка при загрузке данных';
        throw new Error('Fetch failed');
    }
}

async function initUsers() {
    let users = getUsersFromStorage();

    if (users) {
        downloadingText.classList.add('message-data-download--none');
        renderCardsUsers(users);
    } else {
        downloadingText.classList.remove('message-data-download--none');
        setTimeout(async () => {
            users = await fetchUsers();
            downloadingText.classList.add('message-data-download--none');
            renderCardsUsers(users);
        }, 1000);
    }
}
initUsers();

deleteAllCardsButton.addEventListener('click', () => {
    localStorage.removeItem('users');
    usersList.innerHTML = '';
});

addAllCardsButton.addEventListener('click', () => {
    const users = getUsersFromStorage();
    fetchUsers();
    initUsers();
    renderCardsUsers(users);
});

usersList.addEventListener('click', (event) => {
    const cardElement = event.target.closest('.user-card');
    const id = cardElement.dataset.id;
    cardElement.remove();
});