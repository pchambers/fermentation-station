const Gpio = require('pigpio').Gpio;

const light2 = new Gpio(6, {mode: Gpio.OUTPUT});
const water = new Gpio(17, {mode: Gpio.OUTPUT});

const water3 = new Gpio(18, {mode: Gpio.OUTPUT});
const light4 = new Gpio(19, {mode: Gpio.OUTPUT});

//light2.digitalWrite(false);
//water.digitalWrite(false);

//water3.digitalWrite(false);
//light4.digitalWrite(false);
//console.log(light2.digitalRead());
