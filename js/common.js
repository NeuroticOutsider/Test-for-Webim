$(function() {
	$('.hamburger').on('click', function () {
		$(this).toggleClass('is-active');
		$('.navbar__composition').toggleClass('navbar__menu--active')
	});
});

