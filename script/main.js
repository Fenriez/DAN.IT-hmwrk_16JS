let theme = 'day';

$('.change_theme_btn').on('click', function() {
    $('a, p, h1, h2, h3, h4, h5, h6').css({
        filter: 'invert(100%)'
    });
    if (theme == 'day') {
        theme = 'night';
        
    } else {
        theme = 'day';
    }
});