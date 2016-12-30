var adminuser = "admin";
var adminpass = "admin";
var server = "localhost";
var port   = 27017; 
var dbName = "mydatabase";
var mongodb          = require('mongodb');
var mongoClient = mongodb.MongoClient;
console.log("hjjjjjjjj");

var connString = "mongodb://"+adminuser+":"+adminpass+"@"+server+":"+port+"/"+dbName;
    mongoClient.connect(connString, function(err, db) {
        if(!err) {
            console.log("\nMongo DB connected\n");                
        }
        else{
            console.log("Mongo DB could not be connected");
            process.exit(0);
        }
    });