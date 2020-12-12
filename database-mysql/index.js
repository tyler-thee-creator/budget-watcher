var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'logs'
});

var insertOne = function(data, table, callback) {
  var fields = Object.keys(data).join(', ');
  var values = Object.values(data).join(', ');
  connection.query(`INSERT INTO ${table} (${fields}) VALUES (${values});`, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

var getCurrentWeekStats = function(startDate, callback) {
  connection.query(`SELECT description, SUM(amount) FROM historical_log WHERE date >= '${startDate}' GROUP BY description ORDER BY SUM(amount) DESC;`, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

var getMostRecentId = function(callback) {
  connection.query('SELECT MAX(id) FROM historical_log;', function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

var deleteOne = function(id, table, callback) {
  connection.query(`DELETE FROM ${table} WHERE id = '${id}';`, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports.insertOne = insertOne;
module.exports.getCurrentWeekStats = getCurrentWeekStats;
module.exports.getMostRecentId = getMostRecentId;
module.exports.deleteOne = deleteOne;