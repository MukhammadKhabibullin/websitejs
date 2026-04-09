import Drink from "./drink.js";

export default class Coffee extends Drink {
    constructor(name, size, price, temperature, typeMilk, typeGrain) {
        super(name, size, price, temperature)
        this.typeMilk = typeMilk;
        this.typeGrain = typeGrain;
    }

    getInfo() {
        return `${super.getInfo()} | Вид молока: ${this.typeMilk}, Вид зерен: ${this.typeGrain}`;
    }

}