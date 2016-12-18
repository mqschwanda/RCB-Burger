Skip to content
This repository
Search
Pull requests
Issues
Gist
 @mqschwanda
 Unwatch 1
  Star 0
 Fork 0 mqschwanda/RCB-Burger
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Pulse  Graphs  Settings
Branch: master Find file Copy pathRCB-Burger/config/packageJSON.js
f15b757  2 hours ago
@mqschwanda mqschwanda upload files
1 contributor
RawBlameHistory
24 lines (22 sloc)  702 Bytes
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
config.set('name',packageJSON.name)
      .set('github',packageJSON.repository.url)
      .set('description',packageJSON.description)
      .set('author',packageJSON.author);
// END: configuration

// export connection
module.exports = config;
