(function(){
	'use strict';
	var userRoute = require('../routes/userRoute');
	var homeRoute= require('../routes/homeRoute');
	var bodyParser = require("body-parser");
	var cookieParser=require("cookie-parser");
	var sessions = require("client-sessions");
	var express = require('express');

	//
	module.exports = function(app){

	//session
	//
	//cookie parser
	//session manage
	//body parser 
	//public
	//middleare
	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }))

	// parse application/json
	app.use(bodyParser.json());
	app.use(express.static('public'));
	app.use(cookieParser());
	app.use(sessions({
  		cookieName: 'mySession', // cookie name dictates the key name added to the request object 
  		secret: 'blargadeeblargblarg', // should be a large unguessable string 
  		duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms 
  		activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds 
	}));

	console.log("we are inside config");
		userRoute(app);
		homeRoute(app);
	}
}())