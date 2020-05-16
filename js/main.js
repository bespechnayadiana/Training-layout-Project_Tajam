$(document).ready(function() {
	$('.menu-opener').on('click', function(e) { // Наша бургер кнопка на которую мы будем нажимать
		e.preventDefault();
		$('body').toggleClass('mobile-menu-active') // body это селектор на который будет довешиваться класс mobile-menu-active при нажатии на бургер кнопку
	});

	$('.my-carousel').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySeed: 1000,
		speed: 500,
		adaptiveHeight: true,
		arrows: false,
		dots: true,
	});
});
