(function(){
	var collectionController = require('../controllers/collectionController');
	var user=require('../modal/User');
	module.exports = function(app){
		app.post('/getMen',collectionController.men,function(req,res){
			
		});
	}
}())