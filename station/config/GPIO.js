const gpioKey = {
  'master': {
    'water':'17'
  },

  "1":{
    'dht': 16,
    'water': 0,
    'light': 19
  },
  "2":{
    'dht': 23,
    'water': 27,
    'light': 5
  },
  "3":{
    'dht': 0,
    'water': 22,
    'light': 6
  },
  "4":{
    'dht': 0,
    'water': 18,
    'light': 13
  },
}

module.exports = gpioKey;

const gpioPins = {
  waterPressure: 17,
  water1: 27,
  water2: 22,
  water3: 18,
  light1: 5,
  light2: 6,
  light3: 13,
  light4: 19,
  dht11: 16,
  dht22: 23
};
