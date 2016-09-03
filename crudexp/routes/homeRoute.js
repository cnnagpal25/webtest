(function(){
	'use strict';

	var homeController = require('../controllers/homeController');

	function middleHandler(req, res, next) {
    console.log("execute middle ware",req.mySession.email);
    next();
}
	module.exports = function(app){
		app.get('/', middleHandler,homeController.indexf,function(req,res){
			//res.send("page render for /me");
		});
		app.get('/login', middleHandler,homeController.login,function(req,res){
			//res.send("page render for /me");
		});
		app.get('/dashboard', middleHandler,homeController.dashboard,function(req,res){
			//res.send("page render for /me");
		});
		app.get('/signup', middleHandler,homeController.signup,function(req,res){
			//res.send("page render for /me");
		});
		app.post('/signup',homeController.signuppost,function(req,res){
			
		})
	}
}())