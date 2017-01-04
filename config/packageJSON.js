// require package.json and configuration function
var packageJSON = require('./../package.json');
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
config.set('name',packageJSON.name.toUpperCase())
      .set('github',packageJSON.repository.url)
      .set('description',packageJSON.description)
      .set('author',packageJSON.author);
// END: configuration

// export connection
module.exports = config;
