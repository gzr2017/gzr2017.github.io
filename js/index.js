$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.tabs').tabs()({
        swipeable: true
    });
    $('.owl-carousel').owlCarousel();
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