export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.closeButton = this.modal.querySelector('#modal-close-button');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
    this.closeHandler = () => {
      this.close()
    }
  }

  open() {
    this.#initClose();
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.overlay.removeEventListener('click', this.closeHandler);
    this.closeButton.removeEventListener('click', this.closeHandler);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose() {
    this.closeButton.addEventListener('click', this.closeHandler);

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.closeHandler);
    }
  }
}