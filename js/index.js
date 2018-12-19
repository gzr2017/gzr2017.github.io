$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.tabs').tabs()({
        swipeable: true
    });
});
$('.main-carousel').flickity({
    autoPlay: true,
    freeScroll: true,
    wrapAround: true,
});