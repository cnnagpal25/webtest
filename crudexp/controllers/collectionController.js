(function(){
	var men=require('../modal/Men');
	exports.men=function(req,res){
		console.log("inside controller collection");
		men.getMenDetail(req,function(err,responce){
			if(!err){
				res.json({status: true, data:responce });	
			}
			else{
				res.json({status: false, data:responce});
			}
		})
	}
}())