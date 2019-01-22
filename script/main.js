if (!localStorage.theme) {
    localStorage.theme = 'day';
} else {
    changeTheme();
}

$('.change_theme_btn').on('click', function() {
    if (localStorage.theme == 'day') {
        localStorage.theme = 'night';
    } else {
        localStorage.theme = 'day';
    };
    changeTheme();
});

function changeTheme() {
    if (localStorage.theme == 'night') {
        $('.wrapper, img').css({
            filter: 'invert(100%)'
        });
    } else {
        $('.wrapper, img').css({
            filter: 'invert(0%)'
        });
    };
};