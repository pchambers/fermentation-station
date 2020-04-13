const mongoose = require('mongoose');
const { Schema } = mongoose;

const levelSchema = new Schema ({
  title: String,
  location: { type: String, default: "0"},
  temp: { type: Number, default: 0},
  humidity: { type: Number, default: 0},
  light: { type: Boolean, default: false},
  water: { type: Boolean, default: false},
  contents: String
});

module.exports = levelSchema;
