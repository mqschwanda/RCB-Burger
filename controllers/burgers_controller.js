var express = require('express');
var burger = require('./../models/burger.js');
var packageJSON = require('./../config/packageJSON.js');
/***
  `burgers_controller.js` file includes the html route for serving the
	webpage and api routes for client side interaction with the database:
  	1. A GET Route to `/` which displays the index page.
  	2. A POST Route to `/burgers` which creates a burger in the database.
    3. A PUT Route to `/burgers` which updates a burger in the database.
***/
module.exports = function (router, path) {
	// Home Page
	router.get('/', function(req,res) {
		// sellect all records from the burgers table
		burger.selectAll(function(burgerData) {
			// render the index view with the data from our database
			res.render('index', {
				appInfo: packageJSON.settings,
				burger: burgerData
			});
		});
	});
	// POST: api route to post a burger to the database
	router.post('/burger', function(req, res) {
		// create a burger in the database with the name from the post
		burger.insertOne(req.body.burger_name, function(results) {
			// reload the index route
			res.redirect('/');
		});
	});
	// PUT: api route to update a burger in the database
	router.put('/devoured', function(req,res){
		burger.updateOne(req.body.burger_id, true, function(results) {
			// reload the index route
			res.redirect('/');
		});
	});
}
