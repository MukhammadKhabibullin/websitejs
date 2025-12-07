//1

function searchTemperature(country, temperature) {
    console.log(`Сейчаc в ${country} градусов по Цельсию ${temperature}`)
}
searchTemperature("moscow", 15)


//2

 const soundSpeed = 343;

 function learnSpeed(speed) {
    if (speed > soundSpeed) {
        console.log('Сверхзвуковая скорость')
    } else if (speed < soundSpeed) {
        console.log('Дозвуковая скорость')
    } else {
        console.log('Скорость звука')
    }
 }

learnSpeed(343) 


//3

const product = "Apple"
const price = 200

function buyProduct(budget) {
    if (price <= budget) {
        console.log(`${product} приобретен. Спасибо за покупку!`)
    } else {
        const difference = budget - price
        console.log(`Вам не хватает ${Math.abs(difference)} руб, пополните баланс`)
    }
}

buyProduct(190)