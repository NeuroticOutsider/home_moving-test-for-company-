$(function() {
  $('.hamburger').on('click', function () {
		$(this).toggleClass('is-active');
		$('.navbar').toggleClass('navbar--show');
	});
});

