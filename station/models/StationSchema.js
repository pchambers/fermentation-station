const mongoose = require('mongoose');
const { Schema } = mongoose;
const LevelSchema = require('./LevelSchema')

const StationSchema = new Schema ({
  name: { type: String, default:null},
  levels: [LevelSchema],
  _user: { type: Schema.Types.ObjectId, ref:'User'}
});

mongoose.model('stations', StationSchema)
