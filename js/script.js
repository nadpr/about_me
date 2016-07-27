$(document).ready(function(){
	$(".button-collapse").sideNav();


	$('.slider').slider({full_width: true});
			// Pause slider
			$('.slider').slider('pause');
			// Start slider
			$('.slider').slider('start');
			// Next slide
			$('.slider').slider('next');
			// Previous slide
			$('.slider').slider('prev');


	$('.parallax').parallax();
	

}); 