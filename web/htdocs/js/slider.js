// スライダー
$(function(){
	$("#mainvisual-slider").owlCarousel({
//		navigation: true,
		slideSpeed: 300,
//		pagination: false,
		autoPlay: 7000,
		singleItem: true
	});
});
$(function(){
	$("#works-slider").owlCarousel({
		autoPlay: 3000,
		items: 4,
		navigation: true,
		pagination: false
//		itemsDesktop: [1000,4] // if(window<=1000){show 4 slider per page}
	});
});
