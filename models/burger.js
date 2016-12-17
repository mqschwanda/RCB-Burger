/***
  The `burger.js` file creates the methods that will execute the necessary
  MySQL commands in the controllers. These are the methods that are need
  to use in order to retrieve and stored data in the database.
***/
// Import `connection.js` which is our mysql connection
var connection = require('./../config/connection.js');
// export the orm
module.exports = {
    // mysql> SELECT * FROM burgers;
    selectAll: function (callback) {
      connection.query('SELECT * FROM burgers', function (err, results) {
        if (err) throw err;
        // console log the raw sql
        console.log('\nmysql> SELECT * FROM burgers;\n');
        // callback function with the results json object
        console.log(results);
        callback(results);
      });
    },
    // mysql> INSERT INTO burgers (burger_name) VALUES ( ? );
    insertOne: function(name,callback) {
      connection.query('INSERT INTO burgers SET ?', {burger_name: name}, function(err, result) {
        if (err) throw err;
        // console log the raw sql
        console.log('\nmysql> INSERT INTO burgers (burger_name) VALUES ('+JSON.stringify(name)+');\n');
        // callback function with the ID of the inserted burger
        callback(result.insertId);
      });
    },
    // mysql> UPDATE burgers SET devoured = ? WHERE id = ?;
    updateOne: function(burgerId, isDevoured,callback) {
      connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [isDevoured, burgerId], function(err, result) {
        if (err) throw err;
        // console log the raw sql
        console.log('\nmysql> UPDATE burgers SET devoured = '+isDevoured+' WHERE id = '+burgerId+';\n');
        callback(result);
      });
    }
}; // END: module.exports
