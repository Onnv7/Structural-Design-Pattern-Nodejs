export class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost();
    }

    getDescription() {
        return this.coffee.getDescription();
    }
}