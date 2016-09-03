(function(){
	'use strict';

	var userController = require('../controllers/userController');
	var userMiddleware=require('../middleware/userMiddleware');
	module.exports = function(app){
		app.get('/user/me', userMiddleware.middleHandler,userController.me,function(req,res){
			res.send("page render for /me");
		});

		app.get('/user/:user_id', userMiddleware.middleHandler, userController.you,function (req, res) {
		    console.log("end middleware function");
		    res.send("page render finished from");
		});
		app.post('/login',userController.login,function(req,res){
			//res.send("write code for login post");
		});
		app.get('/logout',userController.logout,function(req,res){
			//res.send("write code for login post");
		});
	}
}())