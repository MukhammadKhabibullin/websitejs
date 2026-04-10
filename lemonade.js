import Drink from "./drink.js";

export default class Lemonade extends Drink {
    constructor(name, size, price, temperature, supplement) {
        super(name, size, price, temperature)
        this.supplement = supplement;
    }

    getInfo() {
        return `${super.getInfo()} | Дополнения: ${this.supplement}`;
    }
}