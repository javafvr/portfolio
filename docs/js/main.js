$(document).ready(function() {
	// WOW анимация
	wow = new WOW({
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       50,          // default
		mobile:       true,       // default
		live:         true        // default
		});
	wow.init();
	
	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
		highlightSelector: 'nav a'
	});


	// mixItUp2 фильтр работ в портфолио
	$('#portfolio-projects').mixItUp();

	// Переключалка для фильтра
	$('.filter-block span').on("click", function(){
		$('.filter-block .filter-block__button--active').removeClass('filter-block__button--active');
		$(this).addClass('filter-block__button--active');
	});

	// FancyBox
	$(".fancybox").fancybox({
			helpers: {
				overlay: {
					locked: false
				}
			}
	});

	// jquery validate
	$('#contact-form').validate({
		rules: {
			name: { required:true },
			email: { required:true, email: true},
			// skype: { required:true },
			// phone: { required:true },
			message: { required: true }
		},
		messages: {
			name: 'Пожалуйста, введите свое имя',
			email: { 
				required: "Пожалуйста введите свой email",
				email: "Email адрес должен быть в формате name@domain.com. Возможно, Вы ввели с ошибкой"
			},
			message: 'Пожалуйста, введите текст сообщения',


		},

		submitHandler: function (form) {
			ajaxSubmit();
		}
	})

	function ajaxSubmit() {
		$('#contact-form').submit(function(e) {

			var string = $(this).serialize(); //Сохраним данные ввведенные в форму

			// формируем запрос
			$.ajax({
				type: "POST", //Тип запроса пост
				url: "php/mail.php",
				data: string,

				success: function(html) {
					$("#contact-form").slideUp(800);
					$("#answer").html(html).fadeOut(6000);
				} 
			});
			console.log("z nen");
		return false;
			
		});
	}



});