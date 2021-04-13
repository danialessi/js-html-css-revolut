$(document).ready(function () {
    
    // evento mouseenter dropdown
        $('.menu').mouseenter(function () {
            $(this).children('.dropdown-menu').show();
        });

        $('.menu-title').mouseenter(function () {
            $(this).addClass('color-blue');
        });

    // assegno all'elemento l'evento per nascondere il dropdown-menu
        $('.menu').mouseleave(function () {
            $(this).children('.dropdown-menu').hide();
        });

        $('.menu-title').mouseleave(function () {
            $(this).removeClass('color-blue');
        })

    // language
        $('.language').mouseenter(function () {
            $(this).children('.fa-chevron-down').show();
            $(this).children('.fa-chevron-up').hide();
            // $(this).children('.dropdown-menu').show();
        })

        $('.language').mouseleave(function () {
            $(this).children('.fa-chevron-down').hide();
            $(this).children('.fa-chevron-up').show();
            // $(this).children('.dropdown-menu').hide();
        })
});