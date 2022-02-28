(function () {
	$(".nav__menu__icon").on("click", function () {
		$(this).next().slideToggle("slow");
	});
})(jQuery);
