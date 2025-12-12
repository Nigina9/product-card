
export class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
    }
    openModal() {
        this.modal.classList.add("modal-overlay--showed");
    }
    closeModal() {
        this.modal.classList.remove("modal-overlay--showed");
    }
    isOpen() {
       return this.modal.classList.contains(("modal-overlay--showed"));
    }
};