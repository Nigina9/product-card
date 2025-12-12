export class Form {
    constructor(idForm) {
        this.idForm = document.getElementById(idForm);
    }
    getValueForm() {
        const formData = new FormData(this.idForm);
        const values = Object.fromEntries(formData.entries());
        return values;
    }
    isValid() {
        return this.idForm.checkValidity();
    }
    resetForm() {
        this.idForm.reset()
    }
}