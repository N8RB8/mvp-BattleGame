const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  playerClass: String,
  exp: Number,
  win: Number,
  loss: Number,
  expToLvl: Number,
  stats: {
    lvl: Number,
    maxHealth: Number,
    str: Number,
    speed: Number,
  },
  inventory: { type: Map, of: Number },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
