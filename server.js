var PORT = process.env.PORT || 8080;
/***
  require the basic npm packages we plan on using:
  `express`, `method-override`, `path` and `body-parser`
***/
// EXPRESS CONFIGURATION
var express = require('express');
var server = express();
// PATH
var path = require('path');
server.use(express.static(path.join(__dirname, 'public')));
// METHOD OVERRIDE
var methodOverride = require('method-override');
server.use(methodOverride('_method'));
// BODY PARSER
var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.text());
server.use(bodyParser.json({type:'application/vnd.api+json'}));
// require handlebars which lives in the './config/handlebars.js' file
require('./config/handlebars.js')(server);
// require routing which lives in the `burger_controller.js` file
require('./controllers/burgers_controller.js')(server, path);

server.listen(PORT, function() {
	console.log("App listening on PORT: "+PORT);
});
