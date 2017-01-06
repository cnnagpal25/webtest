module.exports = {
	login:function(req,email,loginCallback){
		console.log("inside login modal"+req.body.email);
		db.collection('user').findOne({"email":email},{password:1,uDb:1},function(err,data){
			var status={};
			if(!err && data != null){
				status={"pass":data.password,"uDb":data.uDb};
				loginCallback("",status);
			}
			else{
				status={"pass":"","uDb":""};
				loginCallback(err,status);
			}
		})
		
	},
	signup:function(prams,signupCallback){
		var email=prams.email;
		var pass=prams.pass;
		var uid=prams.uid;
		var uDb=prams.user_db;
		console.log("key in model"+JSON.stringify(prams));
		try{
			db.collection('user').insert({"email":email,"password":pass,"uid":uid,"uDb":uDb},function(err,data){
				if(!err){
					status=true;
					signupCallback("",status);
				}else{
					console.log("error is"+JSON.stringify(err))
					status=false;
					signupCallback(err,status);
				}


			})
		}catch(e){
			status=false;
			signupCallback(e,status);
		}

	}
}