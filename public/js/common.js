$('document').ready(function () {
    $('.navbar').css("background-color", "#FFF0E2");
    $('#back-top').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
        $('.navbar').css("background-color", "#FFF0E2");
    });
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});