// スライダー
$(function(){
	$("#mainvisual-slider").owlCarousel({
//		navigation: true,
		slideSpeed: 300,
//		pagination: false,
		autoPlay: 14000,
		singleItem: true
	});
});
$(function(){
	$("#works-slider").owlCarousel({
		autoPlay: 14000,
		items: 4,
		itemsTablet: [999,4],
		itemsTabletSmall: [800,3],
		itemsMobile: [320,2],
		navigation: true,
		pagination: false
//		itemsDesktop: [1000,4] // if(window<=1000){show 4 slider per page}
	});
});
