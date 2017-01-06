(function(){
	'use strict';
	var user=require('../modal/User');
	var men=require('../modal/Men');
	var db=require('../config/db');
	require('mailin.js');
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
			user.login(req,email,function(err, status){
				if(status.pass==pass){
					req.mySession.email=email;
					req.mySession.uDb=status.uDb;
					console.log(req.mySession.uDb);
					res.redirect('/customer-orders');
				}
				else{
					res.render('../views/login.ejs');
				}

			});
		}
		exports.logout=function(req,res){
			req.mySession.email="";
			req.mySession.uid="";
			res.redirect('/');
		}
		exports.addItem=function(req,res){
			 if(req.mySession.email==""){
		    	res.render('../views/login.ejs');
		    }
		    else{
		    	res.render('../views/additem.ejs',{mySession:req.mySession,uDb:req.mySession.uDb});
		    }
		}
		exports.submitItem=function(req,res){
			 console.log("bbbbbbbbbb");
			 console.log("req"+JSON.stringify(req.body));
			 var productName=req.body.productName;
			 var category=req.body.category;
			 var description=req.body.description;
			 var merchantsku=req.body.merchantsku;
			 var itemprice=req.body.itemprice;
			 var itemdiscount=req.body.itemdiscount;
			 var user_db=req.mySession.uDb;
			 console.log(req.mySession.uDb);

			 var ws_url = "http://localhost:7000";
			 var api_key="jjjjj";
      		 var client = new Mailin(ws_url , api_key);
	      	 console.log("client is"+JSON.stringify(client));
	      	 var params={"productName":productName,"category":category,"description":description,"merchantsku":merchantsku,"itemprice":itemprice,"itemdiscount":itemdiscount,"user_db":user_db};
	      	 client.post_items(params).on('complete', function(data) {
	      	 		if(data.err!="undefined"){
	      	 			console.log("data"+JSON.stringify(data));
	      	 			res.redirect('/displayList');
	      	 		} else{
	      	 			res.redirect('/additem');
	      	 		}
	      			
	      	 });
		}
		exports.customerOrders=function(req,res){
			res.render('../views/customer-orders.ejs',{mySession:req.mySession});
		}
		exports.validateMerchantsku=function(req,res){
			console.log("inside validatemerchantsku"+req.body.client_db);
			var uDb=req.body.client_db;
			var sku=req.body.sku;
			var data={"uDb":uDb,"sku":sku};
			men.checkSku(data,function(err,code){
				if(!err){
					console.log("code"+code);
					res.send({"count":code});
				}

			})
		}
		exports.displayList=function(req,res){
			console.log("displayList");
			var user_db=req.mySession.uDb;
			var ws_url = "http://localhost:7000";
			var api_key="jjjjj";
      		var client = new Mailin(ws_url , api_key);
	      	console.log("client is"+JSON.stringify(client));
	      	var params={"user_db":user_db};
	      	client.get_record(params).on('complete', function(data) {
      	 		if(data.err!="undefined"){
      	 			console.log("data here is"+data);

      	 			res.render('../views/listItem.ejs',{data:data});
      	 		} else{
      	 			console.log("error is"+JSON.stringify(data));
      	 			
      	 		}
	      			
	      	});
			//res.send("hhhhhhh");
		}
			
}())