
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
			btnScrollUp = $('button__scroll-up'),
			btnScrollDown = $('hero__scroll-down'),
			btnScrollUpMain = $('.logo');

	modalBtn.on('click', function () {
		modal.toggleClass('modal--visible');
	});

	closeBtn.on('click', function () {
		modal.toggleClass('modal--visible');
	});

	$(document).keydown(function (e) {
		if (e.which == 27) {
			modal.removeClass('modal--visible');
		}
	});

	$(document).on('click', function (e) {
		if ($(e.target).hasClass('modal')) {
			modal.removeClass('modal--visible');
		}
	});

	$(window).scroll (function () {
		if ($(this).scrollTop () > 500) {
			btnScrollUp.fadeIn();
		} else {
			btnScrollUp.fadeOut();
		}
	});

	btnScrollUp.on('click', function() {
		$('body, html').animate({
			scrollTop: 0
			}, 1000);
			return false;
	});

	btnScrollUpMain.on('click', function() {
    $('body, html').animate({
      scrollTop: 0
      }, 1000);
      return false;
	});
	
	btnScrollDown.on('click', function(){
    $('body, html').animate({
      scrollTop: 620
    }, 1000);
    return false; 
	});
	
	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	
	var next = $('.swiper-button-next');
	var prev = $('.swiper-button-prev');
	var bullets = $('.swiper-pagination');

	next.css('left', prev.width() + 10 + bullets.width() + 10)
	bullets.css('left', prev.width() + 15)

});

