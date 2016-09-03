(function(){
	'use strict';



	//
	module.exports = {
		middleHandler : function (req, res, next) {
	    console.log("execute user Middleware");
	    next();
	}
	}
}())