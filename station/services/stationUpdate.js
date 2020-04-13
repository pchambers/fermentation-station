const gpioKey = require("../config/GPIO");
const dht = require("./dhtService");
const Gpio = require("pigpio").Gpio;
const gpioList = require("../config/stationV1");

const getStationState = station => {
  const res = station.levels.map(level => {
    var dhtRes = dht.readDht(gpioKey[level.location]["dht"]);
    level.temp = dhtRes.temp;
    level.humidity = dhtRes.humidity;
    level = readLevelGpio(level);

    return level;
  });

  return res;
};

const setStationState = station => {
  station.level.forEach(level => {
    level = setLevelGpio(level);
  });
  const res = getStationState(station);

  return res;
};

//turn all of the relays to open
const initStation = station => {
  gpioList.forEach(gpio => {
    gpio.digitalWrite(0);
  });
  return station;
};

//export statements
exports.getStationState = getStationState;
exports.setStationState = setStationState;
exports.initStation = initStation;

//helper functions
readLevelGpio = level => {
  var light = new Gpio(gpioKey[level.location]["light"], { mode: Gpio.INPUT });
  var water = new Gpio(gpioKey[level.location]["water"], { mode: Gpio.INPUT });
  level.light = light.digitalRead();
  level.water = water.digitalRead();

  return level;
};

const setLevelGpio = level => {
  var light = new Gpio(gpioKey[level.location]["light"], { mode: Gpio.OUTPUT });
  var water = new Gpio(gpioKey[level.location]["water"], { mode: Gpio.OUTPUT });
  light.digitalWrite(level.light);
  water.digitalWrite(level.water);

  return level;
};
