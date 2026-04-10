export default class Drink  {
    #temperature;
    constructor(name, size, price, temperature) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    getInfo() {
        return [this.name, this.size, this.price, this.#temperature].toString();
    }

    getTemperture() {
        return this.#temperature;
    }

    setTemperture() {
        this.#temperature = newTemperature;
    }

    #prepare() {
        console.log(`Начинаем готовить ${this.name}...`)
    }

    serve() {
        this.#prepare();
        console.log(`Ваш ${this.name} готов`);
    }
}


