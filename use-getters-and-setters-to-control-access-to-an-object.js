// Only change code below this line
class Thermostat {
  constructor(F) {
    this._temp = F;
  }
  get temperature() {
    return (5 / 9) * (this._temp - 32);
  }
  set temperature(updateTemperature) {
    this._temp = (updateTemperature * 9) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos.temperature);
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
