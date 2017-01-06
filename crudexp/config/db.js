module.exports = {
	connectDb:function(dbname,cb){
		var mongodb = require('mongodb');
		var MongoClient = mongodb.MongoClient;
		MongoClient.connect("mongodb://localhost:27017/"+dbname, function(err, db) {
		  if(!err) {
		    console.log("We are connected");
		    cb("",db);

		    //routes(app);
		  }
		  else{
		  	console.log("there is an error"+err);
		  	cb(err,"");
		  }
		});
	}
}