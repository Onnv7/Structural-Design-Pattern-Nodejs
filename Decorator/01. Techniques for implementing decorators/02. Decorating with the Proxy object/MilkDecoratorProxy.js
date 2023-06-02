import { CoffeeBeverage } from "../../CoffeeBeverage.js"
const milkDecoratorHandler = {
    get(target, property) {
        if (property === "getCost") {
            return function getCost() {
                return target.getCost() + 2
            }
        }
        else if (property === "getDescription") {
            return function getDescription() {
                return target.getDescription() + " + Milk"
            }
        }
        return target[property]
    }
}

const coffee = new CoffeeBeverage()
const coffeeProxy = new Proxy(coffee, milkDecoratorHandler)

console.log(coffeeProxy.getCost())
console.log(coffeeProxy.getDescription())