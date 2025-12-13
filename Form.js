export class Form {
    constructor(idForm) {
        this.form = document.getElementById(idForm);
    }

    getValueForm() {
        const formData = new FormData(this.form);
        const values = Object.fromEntries(formData.entries());
        return values;
    }

    isValid() {
        return this.form.checkValidity();
    }
    
    resetForm() {
        this.form.reset()
    }
}