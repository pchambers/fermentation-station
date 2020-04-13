const itsAlive = require('./models/BaseStation');
const station = require('./services/stationServices');
const {initState, onState, offState, onStateWaterAll} = require('./config/onOffStates');


//var status = station.setState(itsAlive, initState);
//console.log(status);
status = station.setState(itsAlive, onState);
//console.log(status.state);
