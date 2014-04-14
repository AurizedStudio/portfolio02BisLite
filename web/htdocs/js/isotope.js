// isotope設定
$(function(){
$(window).load(function() {
	var $container = $("div.isotope");
	$container.isotope({
		itemSelector: '.isotope-item',
		layoutMode: 'fitRows',
		transitionDuration: '0.6s'
	});
//	$container.imagesLoaded(function(){
//		$container.isotope('layout');
//	});
	$("div.category").on('click', '.category-item', function(){
		$(this).addClass('is-category');
		$(this).siblings().removeClass('is-category');
		var filterValue = $(this).attr('data-filter');
		$container.isotope({
			filter: filterValue
		});
	});
});
});
