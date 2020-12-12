var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql');
// var items = require('../database-mongo');
var timestamps = require('./time.js');
var getCurrentTimestamp = timestamps.getCurrentTimestamp;
var getLastSundayTimestamp = timestamps.getLastSundayTimestamp;

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/currentWeek', (req, res) => {
  res.end();
});

app.post('/log', (req, res) => {
  var currentTimestamp = getCurrentTimestamp();
  var lastSundayTimestamp = getLastSundayTimestamp();
  db.insertOne({ amount: req.body.amount, description: "'" + req.body.description + "'", date: "'" + currentTimestamp + "'" }, 'historical_log', (err, insertResponse) => {
    if (err) {
      res.send('error inserting into database: ', err);
      res.end();
    } else {
      db.getCurrentWeekStats(lastSundayTimestamp, (error, queryResponse) => {
        if (error) {
          res.send('error getting current week stats: ' , error);
          res.end();
        } else {
          res.send(queryResponse);
          res.end();
        }
      });
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
