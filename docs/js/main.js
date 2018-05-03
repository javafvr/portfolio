$(document).ready(function() {
	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
		highlightSelector: 'nav a'
	});


	// mixItUp2 фильтр работ в портфолио
	$('#portfolio-projects').mixItUp();


	// FancyBox
	$(".fancybox").fancybox({
			helpers: {
				overlay: {
					locked: false
				}
			}
	});
});