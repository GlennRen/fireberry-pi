var messageListRef = new Firebase('https://fireberrypi.firebaseio.com/');

$(document).ready(function(e){
    $('#signup-form').on('submit', function(){
		var newMessageRef = messageListRef.set({
			carrier: $('#carrier').val(),
 			name: $('#name').val(),
 			phone_number: $('#phone-number').val()
		});    	
    });
});