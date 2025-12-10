export class FormAuthentication {
    constructor(idForm, userData) {
        this.idForm = document.getElementById(idForm);
        this.userData = userData;
    }
    getValueForm() {
        const formData = new FormData(this.idForm);
        const values = Object.fromEntries(formData.entries());
        return values;
    }
    isValid() {
        const values = this.getValueForm(); 
        if (!userData) return false; 
        return values.login === this.userData.login && values.password === this.userData.password;
    }
}