var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'logs'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var insertOne = function(data, table, callback) {
  console.log(data);
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

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
