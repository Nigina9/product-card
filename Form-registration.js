export class RegistrationForm {
    constructor(idForm) {
        this.idForm = document.getElementById(idForm);
    }
    getValueForm() {
        const formData = new FormData(this.idForm);
        const registrationUser = Object.fromEntries(formData.entries());
        return registrationUser;
    }
    isValid() {
        const values = this.getValueForm();
        values.password;
        values.confirmPassword;
        if (values.password !== values["confirm-password"]) {
            alert('Пароли не совпадают ')
            return false;
        } else {
            alert('Успешная регистация!')
            return true;
        }
    }
    resetForm() {
        this.idForm.reset();
    }
}