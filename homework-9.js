import {RegistrationForm} from "./Form-registration.js";
import {
    FormAuthentication
} from "./Form-aut.js"
let registrationUserData;
// №1 Задание,  при нажатии на которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }
const emailForm = document.querySelector('#email-form');
emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
});
// №2Если пользователь ввел два разных пароля - мы должны предупредить его о том, что регистрация отклонена. Если регистрация успешна - также выводим объект с свойствами и их значениями, как в задании №4. Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date())
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const registration = new RegistrationForm("registration-form")
    if (!registration.isValid()) return;
    const registrationUser = registration.getValueForm();
    registrationUser.createOn = new Date();
    console.log(registrationUser);
    registrationUserData = registrationUser;
    registration.resetForm();
});

const authenticationForm = document.getElementById("authentication-form")
authenticationForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const authForm = new FormAuthentication("authentication-form");
    if (!authForm.isValid()) {
        alert("Логин или пароль не совпадают!");
        return;
    }
    const currentUser = authForm.getValueForm();
    currentUser.lastLogin = new Date();
    console.log(currentUser);
    alert("Вы авторизовались!")
    authenticationForm.reset();
});