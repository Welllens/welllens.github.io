// СЛАЙДЕР
$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		items: 30,
		loop: true, //Зацикливаем слайдер
		margin: 50, //Отступ от элемента справа в 50px
		autoplay: true, //Автозапуск слайдера
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 2000, //Время смены слайда
		responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
			0: {
				items: 2
			},
			600: {
				items: 2
			},
			1000: {
				items: 8
			}
		}
	});
});
// КАСТОМКА
function scrollDown(e) {
	let anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
	}, 1000);
	e.preventDefault();
}
// МЕНЮ
(function ($) {

	$.fn.menumaker = function (options) {

		var cssmenu = $(this),
			settings = $.extend({
				title: "Menu",
				format: "dropdown",
				sticky: false
			}, options);

		return this.each(function () {
			cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
			$(this).find("#menu-button").on('click', function () {
				$(this).toggleClass('menu-opened');
				var mainmenu = $(this).next('ul');
				if (mainmenu.hasClass('open')) {
					mainmenu.hide().removeClass('open');
				} else {
					mainmenu.show().addClass('open');
					if (settings.format === "dropdown") {
						mainmenu.find('ul').show();
					}
				}
			});

			cssmenu.find('li ul').parent().addClass('has-sub');

			multiTg = function () {
				cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
				cssmenu.find('.submenu-button').on('click', function () {
					$(this).toggleClass('submenu-opened');
					if ($(this).siblings('ul').hasClass('open')) {
						$(this).siblings('ul').removeClass('open').hide();
					} else {
						$(this).siblings('ul').addClass('open').show();
					}
				});
			};

			if (settings.format === 'multitoggle') multiTg();
			else cssmenu.addClass('dropdown');

			if (settings.sticky === true) cssmenu.css('position', 'fixed');

			resizeFix = function () {
				if ($(window).width() > 768) {
					cssmenu.find('ul').show();
				}

				if ($(window).width() <= 768) {
					cssmenu.find('ul').hide().removeClass('open');
				}
			};
			resizeFix();
			return $(window).on('resize', resizeFix);

		});
	};
})(jQuery);

(function ($) {
	$(document).ready(function () {

		$(document).ready(function () {
			$("#cssmenu").menumaker({
				title: "Menu",
				format: "multitoggle"
			});

			$("#cssmenu").prepend("<div id='menu-line'></div>");

			var foundActive = false,
				activeElement, linePosition = 0,
				menuLine = $("#cssmenu #menu-line"),
				lineWidth, defaultPosition, defaultWidth;

			$("#cssmenu > ul > li").each(function () {
				if ($(this).hasClass('active')) {
					activeElement = $(this);
					foundActive = true;
				}
			});

			if (foundActive === false) {
				activeElement = $("#cssmenu > ul > li").first();
			}

			defaultWidth = lineWidth = activeElement.width();

			defaultPosition = linePosition = activeElement.position().left;

			menuLine.css("width", lineWidth);
			menuLine.css("left", linePosition);

			$("#cssmenu > ul > li").hover(function () {
					activeElement = $(this);
					lineWidth = activeElement.width();
					linePosition = activeElement.position().left;
					menuLine.css("width", lineWidth);
					menuLine.css("left", linePosition);
				},
				function () {
					menuLine.css("left", defaultPosition);
					menuLine.css("width", defaultWidth);
				});

		});


	});
})(jQuery);

// анимация
welensClick();
function welensClick() { // Выполняем функцию после загрузки страницы
	let images = document.querySelectorAll('.skills-img'); // Получаем HTML коллекцию.

	for (let i = 0; i < images.length; i++) { // Перебираем HTML коллекцию и присваиваем функции.
		images[i].onclick = (mainClick, outClick);
	}

	function mainClick() { // Функция присваивает класс активного элемента при нажатии на конкретный элемент.
		this.classList.add('welens-animation');
	}

	function outClick() { // Функция проверяет есть ли активный класс у данного элемента, если есть при повторном нажатии убирает его.
		if (this.classList.contains('welens-animation')) {
			this.classList.remove('welens-animation');
		} else {
			this.classList.add('welens-animation');
		}
	}
};
