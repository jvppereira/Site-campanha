$(function(){

	abrirLumens();
	abrirLumens2();
	abrirLumens3();
	abrirLumens4();

	XF();
	XF2();
	XF3();
	XF4();
	fechar1();
	fechar2();
	fechar3();
	fechar4();

	function abrirLumens(){
		$('.box-single:nth-child(1)').click(function(e){
			console.log("sasa")
			e.stopPropagation();
			$('.bgL').fadeIn();
		});
	}

	function abrirLumens2(){
		$('.box-single:nth-child(2)').click(function(e){
			console.log("sasa")
			e.stopPropagation();
			$('.bgL2').fadeIn();
		});
	}

	function abrirLumens3(){
		$('.box-single:nth-child(3)').click(function(e){
			console.log("sasa")
			e.stopPropagation();
			$('.bgL3').fadeIn();
		});
	}
	function abrirLumens4(){
		$('.sintese input[type=submit]').click(function(e){
			console.log("sasa")
			e.stopPropagation();
			$('.bgL4').fadeIn();
		});
	}
		








	function XF(){

		var el = $('.XF');

		el.click(function(){
			$('.bgL').fadeOut();
		})

		var es = $('.body');

		es.click(function(){
			$('.bgL').fadeOut();
		})

		$('.bgconteudoL').click(function(e){
			e.stopPropagation();
		})
	}

	function XF2(){

		var el = $('.XF');

		el.click(function(){
			$('.bgL2').fadeOut();
		})

		var es = $('.body');

		es.click(function(){
			$('.bgL2').fadeOut();
		})

		$('.bgconteudoL2').click(function(e){
			e.stopPropagation();
		})
	}

		function XF3(){

		var el = $('.XF');

		el.click(function(){
			$('.bgL3').fadeOut();
		})

		var es = $('.body');

		es.click(function(){
			$('.bgL3').fadeOut();
		})

		$('.bgconteudoL3').click(function(e){
			e.stopPropagation();
		})
	}

			function XF4(){

		var el = $('.XF');

		el.click(function(){
			$('.bgL4').fadeOut();
		})

		var es = $('.body');

		es.click(function(){
			$('.bgL4').fadeOut();
		})

		$('.bgconteudoL4').click(function(e){
			e.stopPropagation();
		})
	}


	function fechar1(){

		var el = $('body');

		el.click(function(){
			$('.bgL').fadeOut();
		})

		$('.bgconteudoL').click(function(e){
			e.stopPropagation();
		})
	}

	function fechar2(){

		var el = $('body');

		el.click(function(){
			$('.bgL2').fadeOut();
		})

		$('.bgconteudoL2').click(function(e){
			e.stopPropagation();
		})
	}
		function fechar3(){

		var el = $('body');

		el.click(function(){
			$('.bgL2').fadeOut();
		})

		$('.bgconteudoL2').click(function(e){
			e.stopPropagation();
		})
	}

		function fechar4(){

		var el = $('body');

		el.click(function(){
			$('.bgL4').fadeOut();
		})

		$('.bgconteudoL4').click(function(e){
			e.stopPropagation();
		})
	}
	
})
