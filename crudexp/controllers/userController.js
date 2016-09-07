(function(){
	'use strict';
	var user=require('../modal/User');
	exports.me = function (req, res) {
		    console.log("inside controller me");
		    res.send("page render finished from controller");
		};
		exports.you=function (req,res){
			console.log("inside controller you");
		    res.send("page render finished from you controller");
		};
		exports.login=function(req,res){
			console.log("req"+JSON.stringify(req.body));
			var email=req.body.email;
			var pass=req.body.password;
			console.log("email is"+email);
			//res.send("write code for login post");
			user.login(req,email,pass,function(err, status){
				if(status==true){
					req.mySession.email=email;
					res.render('../views/customer-orders.ejs',{mySession: req.mySession});
				}
				else{
					res.render('../views/login.ejs');
				}

			});
		}
		exports.logout=function(req,res){
			req.mySession.email="";
			res.redirect('/');
		}
		exports.customerOrders=function(req,res){
			res.render('../views/customer-orders.ejs');
		}
}())