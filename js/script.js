$(document).ready(function () {
    
    // evento mouseenter 
        $('.menu').mouseenter(function () {
            $(this).children('.dropdown-menu').show();
        });

        $('.menu-title').mouseenter(function () {
            $(this).addClass('color-blue');
        })

    // assegno all'elemento l'evento per nascondere il dropdown-menu
        $('.menu').mouseleave(function () {
            $(this).children('.dropdown-menu').hide();
        });

        $('.menu-title').mouseleave(function () {
            $(this).removeClass('color-blue');
        })

    // IT chevron 
        
});