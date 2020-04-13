const sensor = require("node-dht-sensor");

function exec( { pin, model } ) {
  const res = sensor.read(model,pin);
    console.log(
      `temp: ${res.temperature.toFixed(1)}°C, `+
      `humidity: ${res.humidity.toFixed(1)}%`
    );
}


exec({pin: 16, model: 11});
