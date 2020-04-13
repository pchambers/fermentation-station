
const updateState = {
  name: "It's Alive",
  id: null,
  levels: [{
    "1": {
      temp: 0,
      humidity: 0,
      water: 0,
      light: 0,
      contents: "Fermentation Dungeon"
    }},
      {"2": {
        temp: 0,
        humidity: 0,
        water: 1,
        light: 1,
        contents: "Mixed Greens and Microgreens"
      }},
      {"3":{
        temp: 0,
        humidity: 0,
        water: 1,
        light: 1,
        contents: "Mixed Herbs"
      }},
      {"4":{
        temp: 0,
        humidity: 0,
        water: 0,
        light: 0,
        contents: "Fermentation Dungeon"
      }}
    ]
}

module.exports.updateState = updateState;
