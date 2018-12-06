$(function(){
	
	 $('body').running();
	
	$(window).bind("scroll",function(){ 

		var top=$(window).scrollTop();
		
		$('.honor>ul').each(function(){
			if ($(this).offset().top -top< $(window).height() - 200){
				$('.honor>ul').removeClass('selected');
				$(this).addClass('selected');
			};							   
		})
		
	});  
	 
			
})

