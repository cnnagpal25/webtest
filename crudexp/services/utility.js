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

		}
}