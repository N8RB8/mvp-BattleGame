const express = require('express');
const Promise = require('bluebird');
const path = require('path');
const db = require('./db/index.js');
const Player = require('./db/model.js');

const app = express();

app.use(express.static(path.join(__dirname, '/client/dis')));
app.use(express.json());

app.get('/playerData', (req, res) => {
  Player.findById(req.query._id).then((player) => res.send(player));
});

app.post('/playerData', (req, res) => {
  let insert = req.body.player;
  if (insert._id) {
    delete insert._id;
  }
  const player = new Player(insert);
  console.log('posted', player, 'request type', req.method);
  player.save();
  res.send(player._id).end();
});

let port = process.env.PORT || 3000;

app.listen(port);
