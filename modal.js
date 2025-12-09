class Modal {
    constructor(id, openButton, closeButton, overlay) {
        this.id = document.getElementById('authentication-modal');
        this.openButton = document.getElementById('authentication-button');
        this.closeButton = document.getElementById('close-modal-button');
        this.overlay = overlay;
    }
    openModal() {
        this.openButton.addEventListener('click', () => {
            this.id.classList.add(this.overlay);
        })
    }
    closeModal() {
        this.closeButton.addEventListener('click', () => {
            this.id.classList.remove(this.overlay);
        })
    }
    checkOpenModal() {
        this.id.classList.contains(this.overlay)
    }

}
const modalOverlay = new Modal('authentication-modal', 'authentication-button', 'close-modal-button', 'modal-overlay--showed')
modalOverlay.openModal();
modalOverlay.checkOpenModal();
modalOverlay.closeModal();