import Drink from "./drink.js";

export default class Tea extends Drink {
    constructor(name, size, price, temperature, typeLeaves) {
        super(name, size, price, temperature)
        this.typeLeaves = typeLeaves;
    }

    getInfo() {
        return `${super.getInfo()} | Вид заварки: ${this.typeLeaves}`;
    }

}