$(document).ready(function () {
  //your code here

	
	$('.numericOnly').keyup(function () {     
  		this.value = this.value.replace(/[^1-9\.]/g,'');
	});
});
function formValidate(){
		var status=true;
		var inputs=$( "form" ).find( 'input[type=text]')  
		$.each(inputs, function(i,v){
			var input = $(inputs[i])
			if($(inputs[i]).val().trim() == ''){
				//if($())
				$(input).addClass('validation_error');
				$(input).after('<span class="error-fade text-danger">Oops ! this field is required</span>');
				$('.error-fade').delay(3000).fadeOut(400);
				
				// !!! And remove the span from html code when fadeOut finished
				status = false;
			}
		});
		return status;
}
function merchantskuValidate(){
	var client_db=cdb;
	var input=$( "form" ).find( "#sku");
	var sku=input.val().trim();
	console.log("sku"+sku);
	$.ajax({
		  type: "POST",
		  url: "/validatemerchantsku",
		  data:JSON.stringify({'client_db':client_db,"sku":sku}),
		  contentType: 'application/json',

		}).done(function( data ) {
			console.log("data is"+JSON.stringify(data));
			if(data.count!=0){
				$(input).addClass('validation_error');
				$(input).after('<span class="error-fade text-danger">Oops We need to fill unique SKU</span>');
				$(input).focus();
				$('.error-fade').delay(3000).fadeOut(400);
			}
		});
}