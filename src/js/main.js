
// Открытие/закрытие модалки на нативном js
/*
document.addEventListener("DOMContentLoaded", function(event) {
	const modal = document.querySelector('.modal');
	const modalBtn = document.querySelectorAll('[data-toggle=modal]');
	const closeBtn = document.querySelector('.modal__close');
	const switchModal = () => {
		modal.classList.toggle('modal--visible');
	}

	modalBtn.forEach(element => {
		element.addEventListener('click', switchModal);
	});

	closeBtn.addEventListener('click', switchModal);

});
*/

// Открытие/закрытие модалки на jquery
$(document).ready(function () {
	var modal = $('.modal'),
			mdialog = $('.modal__dialog')
			modalBtn = $('[data-toggle="modal"]'),
			closeBtn = $('.modal__close'),
			btnScrollUp = $('.button__scroll-up'),
			btnScrollDown = $('.hero__scroll-down'),
			btnScrollUpLogo = $('.logo');

			// Клик по кнопке вызывает модальное окно
	modalBtn.on('click', function () {
		modal.toggleClass('modal--visible');
	});

			// Клик по крестику закрывает модалку
	closeBtn.on('click', function () {
		modal.toggleClass('modal--visible');
	});

			// Модалка закрывается по Esc
	$(document).keydown(function (e) {
		if (e.which == 27) {
			modal.removeClass('modal--visible');
		}
	});

			// Модалка закрывается по клику по пустой области
	$(document).on('click', function (e) {
		if ($(e.target).hasClass('modal')) {
			modal.removeClass('modal--visible');
		}
	});

			// Кнопка Scroll-up появляется и исчезает при прокручивании
	$(document).scroll(function() {
		if($(this).scrollTop() > 500) {
			btnScrollUp.fadeIn();
		} else {
			btnScrollUp.fadeOut();
		};
	})

			// Анимация прокрутки вверх при нажатии на Scroll-up
	btnScrollUp.on('click', function() {
		$('body, html').animate({
			scrollTop: 0
			}, 1000);
			return false;
	});
		
			// Анимация прокрутки вверх при нажатии 


			// Анимация прокрутки вниз при нажатии на кнопку листать вниз
	btnScrollDown.on('click', function(){
    $('body, html').animate({
      scrollTop: 620
    }, 1000);
    return false; 
	});
	
			// Настройка свайпера в блоке Завершенные проекты
	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				// when window width is >= 480px
				480: {
					slidesPerView: 1,
					spaceBetween: 30
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 1,
					spaceBetween: 40
				}
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	
	

	var next = $('.swiper-button-next');
	var prev = $('.swiper-button-prev');
	var bullets = $('.swiper-pagination');

	next.css('left', prev.width() + 20 + bullets.width() + 20)
	bullets.css('left', prev.width() + 20)
	// Элемент меню 


	new WOW().init();
});

