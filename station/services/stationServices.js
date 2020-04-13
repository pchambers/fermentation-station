const Gpio = require("pigpio").Gpio;
const zoneServices = require("./zoneServices");

module.exports.getState = getState;
module.exports.setState = setState;

function getState(station) {
  var state = station.state;
  station = getWaterPressure(station);

  for (var i = 0, len = station.zones.length; i < len; i++) {
    var aZone = zoneServices.getZoneState(station.zones[i]);
    state.zones[i] = aZone.state;
  }
  station.state = state;

  return station;
}

function setState(station, state) {
  for (var i = 0, len = station.zones.length; i < len; i++) {
    station.zones[i] = zoneServices.setZoneState(
      station.zones[i],
      state.zones[i]
    );
  }
  station = getState(station);
  station = setWaterPressure(station);
  return station;
}

function getWaterPressure(station) {
  station.state.waterPressure = station.waterPressureIO.digitalRead();

  return station;
}

function setWaterPressure(station) {
  station.state.waterPressure =0;
  for (var i = 0, len = station.state.zones.length; i < len; i++) {
    station.state.waterPressure =
      station.state.waterPressure || station.state.zones[i].water;
  }
  station.waterPressureIO.digitalWrite(station.state.waterPressure);

  return station;
}
