var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser());

var now = new Date();
var ok = now.getSeconds();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));

app.get('/currentWeek', (req, res) => {
  res.end();
});

app.post('/log', (req, res) => {
  var date = new Date();
  var currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
  var y = date.getFullYear();
  var m = date.getMonth().toString().length === 1 ? `0${date.getMonth()}` : date.getMonth();
  var d = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
  var h = date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours();
  var min = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
  var s = date.getSeconds().toString().length === 1 ? `0${date.getSeconds()}` : date.getSeconds();
  var currentTimestamp = `${y}-${m + 1}-${d} ${h}:${min}:${s}`
  console.log(currentTimestamp);

  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));
  res.end();
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
