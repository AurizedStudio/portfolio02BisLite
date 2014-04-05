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

// フッター CONNECT WITH US
$(function(){
	$("div.footer-item-v5 li:nth-child(3n)").addClass("mr0");
});
