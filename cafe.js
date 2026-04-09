export default class Cafe {
    constructor(nameCafe, address) {
        this.nameCafe = nameCafe;
        this.adrdess = address;
    }

    getInfo() {
        console.log(`Кафе ${this.nameCafe} по адресу ${this.adrdess}`)
    }

    order(drink) {
        console.log("Заказ принят")
        this.sell
        console.log(`Ваш напиток ${drink.name}`)
    }   
}