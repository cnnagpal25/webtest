module.exports = {
	login:function(req,email,pass,loginCallback){
		console.log("inside login modal"+req.body.email);

db.collection('user').findOne({"email":email},{password:1},function(err,data){
			var status="";
			if(!err && data != null){
				console.log("data is"+JSON.stringify(data));
				if(data.password==pass){
					status=true;
				}
				else{
					status=false;
				}
				loginCallback("",status);
			}
			else{
				status=false;
				loginCallback(err,status);
			}
		})
		
	},
	signup:function(req,signupCallback){
		var email=req.body.email;
		var pass=req.body.password;
		try{
			db.collection('user').insert({"email":email,"password":pass},function(err,data){
				if(!err){
					status=true;
					signupCallback("",status);
				}else{
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