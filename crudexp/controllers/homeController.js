(function(){
//chirag changes to test
	'use strict';
	var user=require('../modal/User');
	exports.login = function (req, res) {
		    console.log("inside home controller");
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
		console.log("email is"+email);
		user.signup(req,function(err,responce){
			if(responce==true){
				req.mySession.email=email;
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
}())