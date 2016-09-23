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
	}
}


