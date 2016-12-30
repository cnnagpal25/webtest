module.exports = {
		
		generateUid:function(){
			var password = this.userUid(10);
	    	var text = this.userUid(10);
	    	var uid=this.encrypt(text,password);
	    	return uid;
	    },
		encrypt:function(text,password){
		var algorithm="aes-256-ctr";
		var crypto = require('crypto');
		  cipher=crypto.createCipher(algorithm,password);
		  var crypted = cipher.update(text,'utf8','hex')
		  crypted += cipher.final('hex');
		  return crypted;
		},
		userUid :function(len){
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			var text="";
	    	for( var i=0; i < len; i++ )
        		text += possible.charAt(Math.floor(Math.random() * possible.length));
        	return text;

		},
		createDb:function(cb){
			var adminuser = "admin";
			var adminpass = "admin";
			var server = "localhost";
			var port   = 27017; 
			var dbName = "c_"+this.userUid(8);
			console.log("dbName is"+dbName);
			var mongodb          = require('mongodb');
			var mongoClient = mongodb.MongoClient;
			console.log("hjjjjjjjj");
			var connString = "mongodb://"+adminuser+":"+adminpass+"@"+server+":"+port+"/"+dbName;
			    mongoClient.connect(connString, function(err, db) {
			        if(!err) {
			            console.log("\nMongo DB connected\n");
			            cb("fdffd",null);
			        }
			        else{
			            console.log("Mongo DB could not be connected");
			            cb("",dbName);
			        }
			    });
		}
}