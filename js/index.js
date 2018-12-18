$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.tabs').tabs();
    $('.owl-carousel').owlCarousel();
});
$('.tabs').tabs()({
    swipeable: true
});
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
    draggable: true,
    freeScroll: true,
    contain: true,
    pageDots: false,
    wrapAround: true,
    autoPlay: true
});