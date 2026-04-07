import { Modal } from './modal.js';
import { Form } from './form.js';

//4
 document.addEventListener('DOMContentLoaded', () => {
    const formSubscribe = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email');


    formSubscribe.addEventListener('submit', (event) => {
        event.preventDefault();        

        const emailValue = emailInput.value.trim();

        if (!emailValue) {
            alert('Введите email!');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            alert('Введите корректный email!');
            return;
        }

        console.log({ email: emailValue });

        emailInput.value = '';
    });
 });

//5


//10 дз 4 и 5 

const registrationModal = new Modal('registration-modal');
const  registrationButton = document.getElementById('openModal')
registrationButton.addEventListener('click', () => registrationModal.openModal())



const registrationForm = new Form('reg-modal-form')

registrationForm.formElement.addEventListener('submit', (event) => {
    event.preventDefault();
 
    if (!registrationForm.isValid()) {
        alert('регистрация');
        return;
    }

    const formData = registrationForm.getFormData(registrationForm.formElement)
    
    if (formData.password !== formData["repeat-password"]) {
        alert("Пароли не совпадают")
        return;
    };

    formData.createdOn = new Date();
    console.log(formData);
    registrationForm.reset();
    registrationModal.closeModal();
});