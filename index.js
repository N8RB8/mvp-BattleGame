const express = require('express');
const Promise = require('bluebird');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/client/dis')));
app.use(express.json());

app.get('/playerData', (req, res) => {});

app.post('/playerData', (req, res) => {});

app.listen(3000);
