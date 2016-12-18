// require mysql
var mysql = require('mysql');
// END: configuration
// configure the database with the object just created
var connection = mysql.createConnection(process.env.JAWSDB_URL);
// connect to the database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('\n==== mySQL ====\nCONNECTED TO DB: '+connection.config.database+'\n        ON PORT: '+connection.config.port+'\n        WITH ID: '+connection.threadId);
});
// export connection
module.exports = connection;
