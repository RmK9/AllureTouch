$(document).ready(function () {
    //Remove loader gif
    $("#loader-gif").remove();

    //Slider init
    $(".bxslider").show().bxSlider({
        auto: true,
        captions: true,
        pause: 6000,
        speed: 1000,
        useCSS: false,
        easing: "easeInOutCubic",
        pager: false
    });

    $(".bx-viewport").css("height", $(".slide1").width() / 1.9);

    //Parallax effect (X-Browser) - Some mobile browsers may stutter though
    $.stellar({
        horizontalScrolling: false,
        hideDistantElements: false
    });

    //Fix Slider responsiveness
    fixSliderResponsiveness();

    $(window).resize(function () {
        fixSliderResponsiveness();
    });

});

//Fixes Slider responsiveness
function fixSliderResponsiveness() {
    $(".slide1").css("height", $(".slide1").width() / 1.9);
    $(".slide2").css("height", $(".slide1").width() / 1.9);
    $(".slide3").css("height", $(".slide1").width() / 1.9);
}