$(document).ready(function(){

    
    
    
     $('.btn').on('click', function() {
         
         
         
         
            $('html, body').animate({
                scrollTop: ($('#pos').offset().top)
                    },2000);
         
         
         
         
         
         $(".table").fadeIn(4000);
        
         

		var root = 'https://jsonplaceholder.typicode.com';
         
       
        

	   	var config = {

	   		method: 'GET',

	   		url: root + '/users',

	  	   	success : function ( users ) {
                
                

	  	   		var source   = $("#entry-template").html();
				var template = Handlebars.compile(source);
                

	  	   		for (var i = 0; i < users.length; i++){
                    
                    
                    
                    
	  	   			var context = users[i];
                    
                    
					var html    = template(context);

	  	   			$('#user-list').append(html);
                    
                   
               
         
                   
	  	   		}
                
                
                
        
                
	   			
	   		},
	   		error : function (err) {
	   			alert('Impossible to load users')
	   		}

	   	}
        
        
        
        

	   	$.ajax(config)

});
    
    
    
    
});








