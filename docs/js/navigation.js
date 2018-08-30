$(document).ready(function() {
	var navToggleButton = $('.navigation__toggle'),
		navToggleIcon = $('.navigation__toggle').find('.fa'),
		navList = $('.navigation__list'),
		navListOpen = 'navigation__list--open',
		navIcon = 'fa-bars',
		navIconClose = 'fa-times',
		navLink = $('.navigation__list').find('a');


	// Navigation
	navToggleButton.on('click',function(e){
		
		e.preventDefault();
		
		navList.toggleClass(navListOpen);

		toggleIcon();

	});

	navLink.on('click', function() {
		navList.removeClass(navListOpen);
		toggleIcon();
	});
	
	function toggleIcon() {
		if(navToggleIcon.hasClass(navIcon)){
			navToggleIcon.removeClass(navIcon).addClass(navIconClose);
		} else {
			navToggleIcon.removeClass(navIconClose).addClass(navIcon);
		};

	}
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768 && navList.hasClass(navListOpen)){
			navList.removeClass(navListOpen);
			toggleIcon();
		}

	});
});