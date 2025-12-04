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
const registrationForm = document.querySelector("#registration-form");
registrationForm.addEventListener('submit', (event) => {
    const registrationPassword = document.querySelector("#registration-password");
    const password = registrationPassword.value
    const registrationConfirmPassword = document.querySelector("#confirm-password");
    const confirmPassword = registrationConfirmPassword.value
    event.preventDefault();
    if (password !== confirmPassword) {
        alert('Пароли не совпадают, попробуйте еще раз');
        return;
    } else {
        alert('Вы зарегистрированы!')
    }
    const form = event.target;
    const formData = new FormData(form);
    const registrationUser = Object.fromEntries(formData.entries());
    registrationUser.createOn = new Date();
    console.log(registrationUser);
    registrationUserData = registrationUser;
});

// №3 Работа с модальным окном
const authenticationButton = document.querySelector("#authentication-button");
const modal = document.querySelector(".modal-overlay");
authenticationButton.addEventListener('click', () => {
    modal.classList.add("modal-overlay--showed");
});
const closeModalButton = document.querySelector("#close-modal-button");
const closeModal = () => {
    closeModalButton.addEventListener('click', () => {
        modal.classList.remove("modal-overlay--showed")
    })
};
closeModal();

const authenticationForm = document.querySelector(".authentication-form");
authenticationForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const authenticationLogin = document.querySelector("#authentication-login").value;
    const authenticationPassword = document.querySelector("#authentication-password").value;
    if (authenticationLogin === registrationUserData.login && authenticationPassword === registrationUserData.password) {
        const currentUser = registrationUserData;
        currentUser.lastLogin = new Date();
        console.log(currentUser);
        alert("Вы авторизовались!")
    } else {
        alert("Логин и пароль не совпадают!")
    }
});