// Target interface

class CelsiusTemperature {
    constructor(temp) {
        this.temp = temp;
    }

    getTemperature() {
        return this.temp;
    }
}

class FahrenheitTemperature {
    constructor(temp) {
        this.temp = temp;
    }

    getTemperature() {
        return this.temp;
    }

}

// Adapter
class CelsiusToFahrenheitAdapter extends FahrenheitTemperature {
    constructor(celsiusTemp) {
        super();
        this.celsiusTemp = celsiusTemp;
    }

    getTemperature() {
        const celsius = this.celsiusTemp.getTemperature();
        const fahrenheit = (celsius * 9) / 5 + 32;
        return fahrenheit;
    }
}

// Client
const celsiusTemp = new CelsiusTemperature(25);
const fahrenheitTemp = new FahrenheitTemperature(25);

const adapter = new CelsiusToFahrenheitAdapter(celsiusTemp);


console.log(`Celsius: ${celsiusTemp.getTemperature()}°C`);
console.log(`Fahrenheit: ${fahrenheitTemp.getTemperature()}°F`);
console.log(`Adapter: ${celsiusTemp.getTemperature()}°C -> ${adapter.getTemperature()}°F`);
