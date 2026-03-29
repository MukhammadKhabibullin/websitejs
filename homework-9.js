//4
document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email');

    if (!form || !emailInput) {
        console.error('Форма или поле email не найдены');
        return;
    }

    form.addEventListener('submit', (event) => {
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

const openButtonModul = document.getElementById('openModal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close')
const buttonRegistration = document.querySelector('.button-registration')
const form = document.querySelector('.modal-content');



openButtonModul.addEventListener ('click', () => {
    modal.classList.add('modal-showed')
})

closeModal.addEventListener ('click', () => {
    modal.classList.remove('modal-showed')
})

function showError(input, message) {
    const formGroup = input.parentElement;
    let error = formGroup.querySelector('.error-message');

    if (!error) {
        error = document.createElement('span');
        error.className = 'error-message';
        formGroup.appendChild(error);
    }
    error.textContent = message;
    input.classList.add('input-error');
}

function removeError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message');
    if (error) {
        error.remove();
    }
    input.classList.remove('input-error');
}

function validateForm() {
    let isValid = true;

    const username = document.getElementById('username');
    const surname = document.getElementById('surname');
    const birthDate = document.getElementById('data');
    const login = document.getElementById('login');
    const password = document.getElementById('password');
    const repeatPassword = document.getElementById('repeat-password');

    [username, surname, birthDate, login, password, repeatPassword].forEach(input => {
        removeError(input);
    });

    if (username.value.trim().length < 2) {
        showError(username, 'Имя должно содержать минимум 2 символа');
        isValid = false;
    }

    if (surname.value.trim().length < 2) {
        showError(surname, 'Фамилия должна содержать минимум 2 символа');
        isValid = false;
    }

    if (!birthDate.value) {
        showError(birthDate, 'Выберите дату рождения');
        isValid = false;
    } else {
        const birth = new Date(birthDate.value);
        const today = new Date();
        const age = today.getFullYear() - birth.getFullYear();
        if (age < 12 || (age === 12 && today < birth)) {
            showError(birthDate, 'Регистрация возможна только с 12 лет');
            isValid = false;
        }
    }

    if (login.value.trim().length < 4) {
        showError(login, 'Логин должен содержать минимум 4 символа');
        isValid = false;
    }

    const passwordValue = password.value;
    if (passwordValue.length < 6) {
        showError(password, 'Пароль должен содержать минимум 6 символов');
        isValid = false;
    } else if (!/[A-Za-z]/.test(passwordValue) || !/[0-9]/.test(passwordValue)) {
        showError(password, 'Пароль должен содержать буквы и цифры');
        isValid = false;
    }

    if (passwordValue !== repeatPassword.value) {
        showError(repeatPassword, 'Пароли не совпадают');
        isValid = false;
    }

    buttonRegistration.disabled = !isValid;

    return isValid;
}

openButtonModul.addEventListener('click', () => {
    modal.classList.add('modal-showed');
    form.reset();                    
    buttonRegistration.disabled = true;
});

form.addEventListener('input', validateForm);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        console.log('Форма успешно прошла валидацию!');
        
        modal.classList.remove('modal-showed');
    }

    setTimeout(() => {
            modal.classList.remove('modal-showed');
        }, 500);
});