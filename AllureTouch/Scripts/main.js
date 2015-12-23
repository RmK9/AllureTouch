$(document).ready(function() {
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

    $(".bxslider").bxSlider({
        pager: false
    });

    //Fix upper page responsiveness
    fixUpperPageResponsiveness();

    $(window).resize(function() {
        fixUpperPageResponsiveness();
    });

});

//Fixes upper page responsiveness
function fixUpperPageResponsiveness() {
    if ($(window).width() < 825) {
        $(".upper-social-icons").css({ "position": "static", "padding-left": "30px", "padding-bottom": "10px" });
    } else {
        $(".upper-social-icons").css({ "position": "absolute", "left": "40px", "top": "55px" });
    }
    
}



