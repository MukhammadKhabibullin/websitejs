import {card} from "./cards.js";

//3 Создал и реализовал шаблон для продуктовых карточек

const cardTemplate = document.getElementById('card-template');
const cardsContainer = document.querySelector('.cards-container');

//4 Получил массив объектов

const productDescription = card.reduce((acc, description) => {
    acc[description.name] = description.description;
    return acc;
}, []);

console.log(productDescription);


//5 Реализовал функцию, которая при старте страницы выводит сообщение 

const promptCardAmount = +prompt('Сколько карточек отобразить? От 1 до 5.');

function getCardsCountFromUser(countCard, products) {
    if (countCard >=1 && countCard <= 5){
        const selectedProducts = products.slice(0, countCard);
        return selectedProducts;
    }   else {
        alert("Неверное число! Введите от 1 до 5.");
        return;
     }
};


function renderCards(products) {
    products.forEach(cards => {
    const cardClone = cardTemplate.content.cloneNode(true);
    cardClone.querySelector('.picture').src = `images/${cards.image}.png`;
    cardClone.querySelector('.product-name').textContent = cards.name;
    cardClone.querySelector('.product-description').textContent = cards.description;
    cardClone.querySelector('.product-compound').innerHTML = cards.structure.map(item => `<li>${item}</li>`).join("");
    cardClone.querySelector('.product-price').textContent = cards.price + " \u20BD";
    cardsContainer.appendChild(cardClone);
    });
};
const selectedProducts = getCardsCountFromUser(promptCardAmount, card);

if (selectedProducts) {
    renderCards(selectedProducts);
};