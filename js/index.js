$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.tabs').tabs()({
        swipeable: true
    });
    $('.owl-carousel').owlCarousel();
});
$('.main-carousel').flickity({
    autoPlay: true,
    freeScroll: true,
    wrapAround: true,
});