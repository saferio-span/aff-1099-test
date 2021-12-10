$('document').ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 60) {
            $(".mainmenu").addClass("fixedmenu");
        } else {
            $(".mainmenu").removeClass("fixedmenu");
        }
    });


    $('#back-top').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggler:visible').click();
    });

    var ad = false;
    $('#adPopup').hide();
    var iScrollPos = 0;

    $(".ad_close").click(function () {
        $('#adPopup').addClass("foot_adpopup");
        $('#adPopup').hide();
    });

    $(window).scroll(function () {
        iScrollPos = 1;
        ad = true;
        if ($(window).scrollTop() > 85 && ad == true && iScrollPos > 0) { // this refers to window
            ad = false;
            $('#adPopup').show();
        }
    });

    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize >= 768) {
            $.exitIntent('enable');
            $(document).bind('exitintent', function () {
                $('#TaxExit_Modal23').modal('show');
            });
            $('#TaxExit_Modal23 .MboxClose').click(function () {
                $('#TaxExit_Modal').modal('hide');
                $.exitIntent('disable');
            });
        }
        else if (windowSize < 768) {
            $.exitIntent('disabled');
        }
    }

    checkWidth();
    $(window).resize(checkWidth);

    $('#txtEmailAddress').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            gotoRegisterWithEmailAddress();
        }
    });

});