import { PhoneBudget } from "./phone.js";


export class PhoneFlagman extends PhoneBudget {

    constructor(name, model, prise) {
        super(name, model)
        this.prise = prise; 
    }

    flagman() {
        console.log(`${this.name}, ${this.model}, ${this.prise} флагманские телефоны`)
    }
}



