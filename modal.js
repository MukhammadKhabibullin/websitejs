export class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
        this.setupCloseButton();
    };

    openModal() {
        this.modal.classList.add('modal-showed');
    };

    closeModal() {
        this.modal.classList.remove('modal-showed');
    };

    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }

    setupCloseButton() {
        this.modal.querySelector(".modal-close").addEventListener('click', () => {
            this.closeModal();
        });
    };
};