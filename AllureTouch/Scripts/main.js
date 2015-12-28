$(document).ready(function () {
    //Configure bootstrap navbar onHover event
    $("#menu-item-portfolio").mouseout(function () {
        $(".dropdown-toggle").css("color", "#777");
    });

    $("#menu-item-portfolio").mouseover(function () {
        $(".dropdown-toggle").css("color", "#ff4d00");
        $(".dropdown-menu").mouseover(function () {
            $(".dropdown-toggle").css("color", "#777");
        });
    });

    //Smooth Scrolling (X-Browser) - Uses jQuery Mousewheel Plugin
    $(function () {
        $.srSmoothscroll({
            step: 50,
            speed: 400,
            ease: "easeOutExpo",
            target: $("body"),
            container: $(window)
        });
    });

    //Fix upper page responsiveness
    fixUpperPageResponsiveness();

    $(window).resize(function () {
        fixUpperPageResponsiveness();
    });
});

//Fixes upper page responsiveness
function fixUpperPageResponsiveness() {
    if ($(window).width() < 825) {
        $(".upper-social-icons").css({ "position": "static", "padding-left": "25px", "padding-bottom": "10px" });
    } else {
        $(".upper-social-icons").css({ "position": "absolute", "left": "40px", "top": "55px" });
    }
}