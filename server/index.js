var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql');
// var items = require('../database-mongo');
var timestamp = require('./time.js');
var getCurrentTimestamp = timestamp.getCurrentTimestamp;
var getLastSundayTimestamp = timestamp.getLastSundayTimestamp;

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser());

app.get('/currentWeek', (req, res) => {
  res.end();
});

app.post('/log', (req, res) => {
  var currentTimestamp = getCurrentTimestamp();
  var lastSundayTimestamp = getLastSundayTimestamp();
  db.insertOne({ amount: req.body.amount, description: "'" + req.body.description + "'", date: "'" + currentTimestamp + "'" }, 'historical_log', (err, res) => {
    console.log('ERROR', err, 'RES', res);
  });
  res.end();
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
