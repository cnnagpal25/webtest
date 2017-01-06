var linkDb=require('../config/db');
module.exports = {
	getMenDetail:function(req,menDetailsCallback){
	console.log("inside Men modal");
	db.collection('men').findOne({},{"_id":0},function(err,data){
			var status="";
			//data.toArray(function(err, data){
			if(err) {
				console.log('Some error encountered in data return from lists collection. Error: '+ err);
				return menDetailsCallback(err,null);
			}else{
				console.log('Data returned from lists collection.'+JSON.stringify(data));
				return menDetailsCallback(null, data); 
			}
			//});
		})
	},
	checkSku:function(data,checkSkuCallback){
		linkDb.connectDb(data.uDb,function(err,userDb){
			if(!err){
				userDb.collection('men').count({"merchantsku":data.sku},function(error, numOfDocs){
					if(!error){
						checkSkuCallback("",numOfDocs)
					}
					else{
						checkSkuCallback(error,"");
					}
				})
			}
			else{
				checkSkuCallback(err,"");
			}
		})
		console.log("data is"+JSON.stringify(data));
	}
}


