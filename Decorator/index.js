import { CoffeeBeverage } from './CoffeeBeverage.js';
import { MilkDecorator } from './MilkDecorator.js';

const coffee = new CoffeeBeverage();
const coffeeMilk = new MilkDecorator(coffee);

console.log(coffeeMilk.getCost());
console.log(coffeeMilk.getDescription());
