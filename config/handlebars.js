// require express-handlebars function and configuration function
var exphbs = require('express-handlebars');
var Configurable = require('configurable');
// object to be configured
var config = {};
// returns the object with new constructor prototypes
Configurable(config);
/****
  object now has the following prototypes:
    .get(name)
    .set(name, val) or .set(obj)
    .enable(name) or .disable(name)
    .enabled(name) & .disabled(name)
****/
// CONFIGURE HERE:
config.set('extname','.hbs')
      .set('layoutsDir','views/layouts/')
      .set('partialsDir','views/partials/')
      .set('defaultLayout','main');
// END: configuration
module.exports = function(server) {
  server.engine(config.settings.extname, exphbs(config.settings));
  server.set('view engine', config.settings.extname);
  server.set('views', 'views');
  console.log('\n 🏍  HANDLEBARS CONFIGURED 🚲 \n');
} // END: module.exports
