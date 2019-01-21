(function($){
	
	$(document).ready(function(){

		$('.main-carousel').flickity({
			freeScroll: true,
			cellAlign: 'left',
			wrapAround: true,
			groupCells: '100%',
			contain: true,
		});

	});


})(jQuery)