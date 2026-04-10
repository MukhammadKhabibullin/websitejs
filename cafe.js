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

        if (!(drink instanceof Drink)) {
            console.log("Ошибка: можно заказывать только напитки!");
            return;
        }
        
        console.log(`Заказ принят: ${drink.name}`);
        drink.serve();
        console.log(`Ваш напиток ${drink.name}`);
    }   
}