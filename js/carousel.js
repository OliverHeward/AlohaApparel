(function($){
	
	$(document).ready(function(){

		$('.main-carousel').flickity({
			freeScroll: true,
			cellAlign: '50px',
			// wrapAround: true,
			groupCells: 2,
			contain: true,
		});

	});


})(jQuery)