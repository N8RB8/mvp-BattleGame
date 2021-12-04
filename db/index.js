const mongoose = require('mongoose');

const mongoURI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/BattleGame';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db.then((db) => console.log(`Connected to: ${mongoURI}`)).catch((err) => {
  console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
  console.log(err);
});

module.exports = db;
