import { Form } from "./Form.js";
import { Modal} from "./Modal.js";
let registrationUserData;
// №1 Задание,  при нажатии на которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }
const emailForm = new Form('email-form');
emailForm.idForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = emailForm.getValueForm();
    console.log(data);
});
// №3 Работа с модальным окном
const authModal = new Modal("authentication-modal");
const authenticationButton = document.querySelector("#authentication-button");
const closeModalButton = document.querySelector("#close-modal-button");

authenticationButton.addEventListener('click', () => {
    authModal.openModal();
});

closeModalButton.addEventListener('click', () => {
    authModal.closeModal();
});
// Переписала работу с формами
const registrationForm = new Form("registration-form");
registrationForm.idForm.addEventListener('submit', (event) => {
    const registrationPassword = document.querySelector("#registration-password");
    const password = registrationPassword.value;
    const registrationConfirmPassword = document.querySelector("#confirm-password");
    const confirmPassword = registrationConfirmPassword.value;
    event.preventDefault();
    const registrationUser = registrationForm.getValueForm();
    if (!registrationForm.isValid()) {
        alert('Форма не валидна');
        return;
    }
    if (password !== confirmPassword) {
        alert('Пароли не совпадают, попробуйте еще раз');
        return;
    } else {
        alert('Вы зарегистрированы!')
    }
    registrationUser.createOn = new Date();
    console.log(registrationUser);
    registrationUserData = registrationUser;
    registrationForm.resetForm();
});
const authenticationForm = new Form("authentication-form");
authenticationForm.idForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const authenticationData = authenticationForm.getValueForm();
    if (authenticationData.login === registrationUserData.login && authenticationData.password === registrationUserData.password) {
        const currentUser = registrationUserData;
        currentUser.lastLogin = new Date();
        console.log(currentUser);
    } else {
        alert("Логин и пароль не совпадают!")
        return;
    }
    alert("Вы авторизовались!")
    authenticationForm.resetForm();
    authModal.closeModal();
});