export class Form {
    constructor(formId) {
        this.form = document.getElementById(formId);
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