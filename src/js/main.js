document.getElementById('btn').onclick = function() {
    document.getElementById('advt').hidden = true;
  }

function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu_active');
		if (menu.hasClass('burger-menu_active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger-menu');

$(document).ready(function () {
	$(".footer-adaptive__btn").click(function () {
		$(".footer-adaptive__links").slideToggle();
	});
});

$(document).ready(function () {
	$(".footer-adaptive__btn2").click(function () {
		$(".footer-adaptive__links2").slideToggle();
	});
});

$(document).ready(function () {
	$(".footer-adaptive__btn3").click(function () {
		$(".footer-adaptive__links3").slideToggle();
	});
});

$(document).ready(function () {
	$(".footer-adaptive__btn4").click(function () {
		$(".footer-adaptive__links4").slideToggle();
	});
});

$(document).ready(function () {
	$(".footer-adaptive__btn5").click(function () {
		$(".footer-adaptive__links5").slideToggle();
	});
});

$(document).ready(function () {
	$(".burger-menu__line").click(function () {
		$(".burger-menu__links").slideToggle();
	});
});