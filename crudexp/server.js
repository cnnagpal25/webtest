const express = require('express');
const app = express();
const routes = require('./config/routes');
var bodyParser     =         require("body-parser");
//const mongoose =require("mongoose");



/*app.use(function (req, res, next) {
    console.log("first middle ware");                                                                                                             
    next();
});

app.use(function (req, res, next) {
    console.log("second middle ware");                                                                                                             
    next();
});*/

//mongoose.connect(uri);
console.log('Loading config.');
var dbName = require('./config/myConfig.js');
global.dbName = dbName;
console.log("db is"+JSON.stringify(dbName));
// Retrieve
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test_personal", function(err, db) {
  if(!err) {
    console.log("We are connected");
global.db=db;
routes(app);
  }
  else{
  	console.log("there is an error"+err);
  }
});

/*console.log('Loading localJs...');
var localJs = require('./config/local.js');
//var connections = require('./config/local.js').connections;
global.MyConfig = localJs.myconfig;*/



app.listen(8000);
console.log('start server');