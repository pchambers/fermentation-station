const Gpio = require('pigpio').Gpio;
const sensor = require('node-dht-sensor');

//Zone 1
// no light & water
const waterPump = new Gpio(17, { mode: Gpio.OUTPUT });
//Zone 2
const waterIO2= new Gpio(27, {mode: Gpio.OUTPUT});
const lightIO2= new Gpio(5, {mode: Gpio.OUTPUT});
//Zone 3
const waterIO3= new Gpio(22, {mode: Gpio.OUTPUT});
const lightIO3= new Gpio(6, {mode: Gpio.OUTPUT});
//Zone 4
const waterIO4= new Gpio(10, {mode: Gpio.OUTPUT});
const lightIO4= new Gpio(13, {mode: Gpio.OUTPUT});

const station = {
  name: "It's Alive!",
  _user: null,
  //waterPressure: 0,
  waterPressureIO: waterPump,
  state: {
    waterPressuire: false,
    zones: [
      {
        light: 0,
        water: 0
      },
      {
        light: 0,
        water: 0
      },
      {
        light: 0,
        water: 0
      },
      {
        light: 0,
        water: 0
      }
    ]
  },
  zones: [
    {
      name: "Fermentation Station",
      location: "1",
      state: {
        temperature: 0,
        humidity: 0,
        light: 0,
        water: 0,
        contents: "Fermentation Dungeon",
        notification: ""
      },
      lightIO: null,
      waterIO: null,
      dht: { pin: 16, model: 11 },
    },
    {
      name: "It's Alive 1",
      location: "2",
      state: {
        temperature: 0,
        humidity: 0,
        light: 0,
        water: 0,
        contents: "Mixed greens and microgreens",
        notification: ""
      },
      dht: { pin: 23, model: 22 },
      waterIO: waterIO2,
      lightIO: lightIO2
    },
    {
      name: "It's Alive 2",
      location: "3",
      state: {
        temperature: 0,
        humidity: 0,
        light: 0,
        water: 0,
        contents: "Mixed Herbs",
        notification: ""
      },
      dht: { pin: 23, model: 22 },
      waterIO: waterIO3,
      lightIO: lightIO3
    },
    {
      name: "It's Alive 3",
      location: "4",
      state: {
        temperature: 0,
        humidity: 0,
        light: 0,
        water: 0,
        contents: "Mixed flowers",
        notification: ""
      },
      dht: { pin: 23, model: 22 },
      waterIO: waterIO4,
      lightIO: lightIO4
    }
  ]
};

module.exports = station;
