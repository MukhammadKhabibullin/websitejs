export class Form {
    constructor(id) {
        this.formElement = document.getElementById(id);
    };

    getFormData(form) {
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
        return formValues;
    };

    isValid() {
        return this.formElement.checkVisibility();
    };

    reset() {
        this.formElement.reset();
    };
};