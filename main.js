//Покрас всез карточек

const productCard = document.querySelectorAll('.card-container');
const changeColorCardButton = document.querySelector('#change-color-all-button');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000ff';

changeColorCardButton.addEventListener('click', () => {
    productCard.forEach((card) => card.style.backgroundColor = greenColorHash)
})


//Покрас первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blueColorHash;
})


//Открыть Google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');

    if (answer === true) {
        window.open('https://google.com')
    }   else {
        return;
    }
}


//Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log')

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(massege) {
    alert(massege)
    console.log(massege)
}


//Принаведении на заголовок выводится в консоль контент элемент

const outputTitle = document.querySelector('#products-list-title');
const productsListTitle = outputTitle.innerText
    outputTitle.addEventListener('mouseenter', () => outputConsoleLog(productsListTitle))
 

//Кнопка меняет цвет с одного на другой  

const buttonChangeColor = document.querySelector('.button-change-color');
const blueButton = '#00f7ffff'
const yellowButton = '#eeff00ff'

buttonChangeColor.addEventListener('click', () => {
    if (buttonChangeColor.classList.contains('blueButton') === true) {
        buttonChangeColor.classList.remove('blueButton')
        buttonChangeColor.style.backgroundColor = yellowButton;
    } else {
        buttonChangeColor.classList.remove('yellowButton')
        buttonChangeColor.classList.add('blueButton')
        buttonChangeColor.style.backgroundColor = blueButton;
    }
})
