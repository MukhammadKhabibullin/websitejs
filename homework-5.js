//1

function displayTemperature(country, temperature) {
    console.log(`Сейчаc в ${country} градусов по Цельсию ${temperature}`)
}
displayTemperature("moscow", 15)


//2

 const SOUND_SPEED = 343;

 function compareSpeed(speed) {
    if (speed > SOUND_SPEED) {
        console.log('Сверхзвуковая скорость')
    } else if (speed < SOUNDSPEED) {
        console.log('Дозвуковая скорость')
    } else {
        console.log('Скорость звука')
    }
 }

compareSpeed(343) 


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