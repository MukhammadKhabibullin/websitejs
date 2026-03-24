// document.addEventListener('DOMContetntLoaded', () => {
//     const form = document.getElementById('subscribe-form');
//     const emailInput = document.getElementById('email');

//     if (!form || !emailInput) {
//         console.error('Форма или поле email не найдены');
//         return;
//     }


//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
 

//     const emailValue = emailInput.value.trim();
//         if (!emailValue) {
//         alert('Введите корректный email');
//         return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.text(emailRegex)) {
//         alert('Введите корректный email');
//         return;
//     }

//     console.log({email: velue});
    
//    });
// });

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