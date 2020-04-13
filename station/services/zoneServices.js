const sensor = require("node-dht-sensor");
const Gpio = require("pigpio").Gpio;

module.exports.setZoneState = setZoneState;
module.exports.getZoneState = getZoneState;

function setZoneState(zone, state) {
  if (zone.lightIO) {
    zone.lightIO.digitalWrite(state.light);
  }
  if (zone.waterIO) {
    zone.waterIO.digitalWrite(!state.water);
  } else {
  }
  zone = getZoneState(zone);

  return zone;
}

function getZoneState(zone) {
  zone = getLight(zone);
  zone = getWater(zone);
  zone =  getDht(zone);
  return zone;
}

function getDht(zone) {
  const { pin, model } = zone.dht;
  const res = sensor.read(model, pin);
  zone.state.temperature = res.temperature.toFixed(1) * 1.8 + 32;
  zone.state.humidity = res.humidity.toFixed(1);

  return zone;
}

function getLight(zone) {
  if (zone.lightIO) {
    zone.state.light = zone.lightIO.digitalRead();

    return zone;
  } else {
    return zone;
  }
}

function getWater(zone) {
  if (zone.waterIO) {
    zone.state.water = !zone.waterIO.digitalRead();
    return zone;
  } else {
    return zone;
  }
}
