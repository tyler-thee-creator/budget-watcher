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
  var lastSundayTimestamp = getLastSundayTimestamp();
  db.getCurrentWeekStats(lastSundayTimestamp, (err, data) => {
    if (err) {
      res.send('error getting current week stats: ' , err);
      res.end();
    } else {
      res.send(data);
      res.end();
    }
  });
});

app.post('/log', (req, res) => {
  var currentTimestamp = getCurrentTimestamp();
  var lastSundayTimestamp = getLastSundayTimestamp();
  db.insertOne({ amount: req.body.amount, description: "'" + req.body.description + "'", date: "'" + currentTimestamp + "'" }, 'historical_log', (err, insertResponse) => {
    if (err) {
      res.send('error inserting into database: ', err);
      res.end();
    } else {
      var lastSundayTimestamp = getLastSundayTimestamp();
      db.getCurrentWeekStats(lastSundayTimestamp, (err, data) => {
        if (err) {
          res.send('error getting current week stats: ' , err);
          res.end();
        } else {
          res.send(data);
          res.end();
        }
      });
    }
  });
});

app.delete('/log', (req, res) => {
  db.getMostRecentId((err, data) => {
    if (err) {
      res.send('error getting most recent ID: ', err);
      res.end();
    } else {
      var idOfMostRecent = data[0]['MAX(id)'];
      db.deleteOne(idOfMostRecent, 'historical_log', (err, response) => {
        if (err) {
          res.send('error deleting most recent ID: ', err);
          res.end();
        } else {
          var lastSundayTimestamp = getLastSundayTimestamp();
          db.getCurrentWeekStats(lastSundayTimestamp, (err, data) => {
            if(err) {
              res.send('error getting current week stats: ', err);
              res.end();
            } else {
              res.send(data);
              res.end();
            }
          });
        }
      })
    }
  });
});

app.post('/budget', (req, res) => {
  db.deleteOneByDescription(req.body.description, 'budget_settings', (err, deleteResponse) => {
    if (err) {
      res.send(err);
      res.end();
    } else {
      db.insertOne({description: "'" + req.body.description + "'", amount: req.body.amount}, 'budget_settings', (err, insertResponse) => {
        if (err) {
          console.log(err);
        } else {
          db.getAllFromTable('budget_settings', (err, data) => {
            if (err) {
              res.send(err);
              res.end();
            } else {
              res.send(data);
              res.end();
            }
          })
        }
      });
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
