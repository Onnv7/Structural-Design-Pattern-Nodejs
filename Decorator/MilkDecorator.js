import { CoffeeDecorator } from "./CoffeeDecorator.js";

export class MilkDecorator extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }

    getCost() {
        return this.coffee.getCost() + 2;
    }

    getDescription(description) {
        return this.coffee.getDescription() + " + Milk"
    }
}