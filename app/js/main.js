$(function () {
   $(".menu__link , .footer__link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  $('.menu__button-wrapper').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active');
  $('.menu__main').toggleClass('menu__main--active');
  $('.header__slider').toggleClass('header__slider--active')
});
$('.header__slider').slick({
  dots: true,
  arrows: false,
  fade: true,
  infinite: false,
})
});