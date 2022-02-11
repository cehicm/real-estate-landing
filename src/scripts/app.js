(function () {
    const menuIcon = $(".nav__menu__icon");
    $(menuIcon).on("click", function () {
        menuIcon.nextAll().slideToggle("slow");
    });
})(jQuery);