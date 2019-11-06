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

	// Tabs

	var wrap = $('.tabs__wrapper'),
			tab = $('.tabs__button'),
			tabContent = $('.tabs__content');

	tab.on('click', function() {
		$(this).addClass('tabs__button--active').siblings().removeClass('tabs__button--active');
	});

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	wrap.on('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('tabs__button')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
});

////////////////////////////////////////////////////////////////