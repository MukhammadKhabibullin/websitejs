import Drink from "./drink.js";

export default class Cafe {
    constructor(nameCafe, address) {
        this.nameCafe = nameCafe;
        this.address = address;
    }

    getInfo() {
        console.log(`Кафе ${this.nameCafe} по адресу ${this.address}`);
    }

    order(drink) {
        console.log(`Заказ принят: ${drink.name}`);
        drink.serve();
        console.log(`Ваш напиток ${drink.name}`);
    }   
}