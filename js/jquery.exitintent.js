(function (a) {
    function d(e) { 0 < e.clientY || (b && clearTimeout(b), 0 >= a.exitIntent.settings.sensitivity ? a.event.trigger("exitintent") : b = setTimeout(function () { b = null; a.event.trigger("exitintent") }, a.exitIntent.settings.sensitivity)) } function c() { b && (clearTimeout(b), b = null) } var b; a.exitIntent = function (b, f) {
        a.exitIntent.settings = a.extend(a.exitIntent.settings, f); if ("enable" == b) a(window).mouseleave(d), a(window).mouseenter(c); else if ("disable" == b) c(), a(window).unbind("mouseleave", d), a(window).unbind("mouseenter",
        c); else throw "Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";
    }; a.exitIntent.settings = { sensitivity: 300 }
})(jQuery);