$(document).ready(function() {

// var toggle = $('#navigation__button');

// toggle.on('click', function(e){
// 	e.preventDefault();

// 	if(toggle.hasClass('active')){
// 		toggle.removeClass('active')
// 	}else{
// 			toggle.addClass('active')
// 	}


// })












	var navToggleButton = $('#navigation__button'),
		navToggleIcon = $('.navigation__toggle').find('.fa'),
		navList = $('.navigation__list'),
		navListOpen = 'navigation__list--open',
		// navIcon = 'fa-bars',
		// navIconClose = 'fa-times',
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
		if(navToggleButton.hasClass('active')){
			navToggleButton.removeClass('active')
		}else{
			navToggleButton.addClass('active')
		}
	}

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768 && navList.hasClass(navListOpen)){
			navList.removeClass(navListOpen);
			toggleIcon();
		}

	});
});