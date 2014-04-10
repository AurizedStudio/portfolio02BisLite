// retina画像対応
$(function () {
	if (window.devicePixelRatio > 1) {
		$('.cilogo img').each(function() {
			$(this).attr('src', $(this).attr('src').replace(/(\.)(png|jpg|gif)/gi,'@2x$1$2'));
		});
	}
});

// ドロップダウンメニュー
$(function(){
	jQuery('ul.gnav').superfish({
		cssArrows: false,
		autoArrows: false
	});
});

// グロナビ開閉ボタン
$(function(){
	$('p.menubtn').on('click',function(){
		$('nav.l-gnav').slideToggle('fast');
		return false;
	});
});

// フッター CONNECT WITH US
$(function(){
	var w = $(window).width();
	var x = 999;
	if (w <= x) {
		$("div.footer-item-v5 li:nth-child(3n)").removeClass("mr0");
	} else {
		$("div.footer-item-v5 li:nth-child(3n)").addClass("mr0");
	}
});

