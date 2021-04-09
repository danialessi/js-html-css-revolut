$(document).ready(function () {
    
    // assegno all'elemento l'evento per mostrare il dropdown-menu 
        $('.menu').mouseenter(function () {
            $(this).children('.dropdown-menu').show();
    });

    // assegno all'elemento l'evento per nascondere il dropdown-menu
    $('.menu').mouseleave(function () {
        $(this).children('.dropdown-menu').hide();
    });
});