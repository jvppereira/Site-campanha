$(function(){

		$('header .contriw').click(function(){
			var href = $(this).attr('href'); 
			var offSetTop = $(href).offset().top;
			
			$('	html,body').animate({'scrollTop':offSetTop-380},450);
		})

})