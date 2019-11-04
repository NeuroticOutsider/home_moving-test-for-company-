$(function() {
  $('.hamburger').on('click', function () {
		$(this).toggleClass('is-active');
		$('.navbar').toggleClass('navbar--show');
	});

	$('.main-carousel').owlCarousel({
		loop: true,
		items: 1,
		nav: false,
		smartSpeed: 700,
		responsiveClass: true,
		dots: false, 
		autoplay: true,
    autoplayTimeout: 3000
	});
});

