(function(){
//chirag changes to test
	'use strict';
	var user=require('../modal/User');
	var uitility=require('../services/utility');
	require('mailin.js');
	exports.login = function (req, res) {
		    console.log("inside home controller");
		    var ws_url = "http://localhost:7000";
			var api_key="jjjjj";
      		var client = new Mailin(ws_url , api_key);
      		console.log("client is"+JSON.stringify(client));
      		client.get_lists({"page":1,"pagelimit":10}).on('complete', function(data) {
      			console.log("end of request");
      		});
		    //res.render('index')
		    if(req.mySession.email==""){
		    	res.render('../views/login.ejs');
		    }
		    else{
		    	res.redirect('dashboard');
		    }
		};
	exports.dashboard=function(req,res){
		if(req.mySession.email!=""){
			console.log("inside if"+ JSON.stringify(req.mySession));
			res.render('../views/dashboard.ejs');	
		}else{
			console.log("inside else"+req.mySession);
			res.redirect('/login');
		}
	}
	exports.indexf=function(req,res){
		var ws_url = "http://localhost:7000";
		var api_key="jjjjj";
      	var client = new Mailin(ws_url , api_key);
      	console.log("client is"+JSON.stringify(client));
      	client.post_lists({"page":1,"pagelimit":10}).on('complete', function(data) {
      			console.log("end of request");
      	});
		if(req.mySession.email!=""){
			res.redirect('/dashboard');
		}else{
			console.log("inside else of indexf");
			res.render('../views/index.ejs',{mySession:""});
		}

	}
	exports.signup=function(req,res){
		if(req.mySession.email!=""){
			res.redirect('/dashboard');
		}
		else{
			res.render('../views/signup.ejs');
		}
	}
	exports.signuppost=function(req,res){
		console.log("req"+JSON.stringify(req.body));
		var email=req.body.email;
		var pass=req.body.password;
		console.log("pass is"+pass);
        var text = "";
    	var uid=uitility.generateUid();
    	console.log("uid is"+uid);
    	var prams={"email":email,"pass":pass,"uid":uid};
		user.signup(prams,function(err,responce){
			console.log("responce is"+responce);
			if(responce==true){
				req.mySession.email=email;
				req.mySession.uid=uid;
				res.redirect('/customer-orders');
			}
			else{
				res.render('../views/signup.ejs');
			}

		})
	}
	exports.register=function(req,res){
		res.render('../views/register.ejs');
	}
	exports.men=function(req,res){
		res.json({status: true, data: "mydata"});
	}
}())