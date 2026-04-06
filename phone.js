export class PhoneBudget {
    constructor(name, model) {
        this.name = name;
        this.model = model;

    }

    budget() {
        console.log(`${this.name}, ${this.model} бюджетные телефоны`)
    }
}

