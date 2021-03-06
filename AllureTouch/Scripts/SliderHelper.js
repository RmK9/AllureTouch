﻿$(document).ready(function () {
    //Load slider when first image loaded
    var src = $(".slide1").css("background-image");
    var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g, '');

    var img = new Image();
    img.onload = function () {
        //Slider init
        $(".bxslider").fadeIn({
            duration: 1300,
            easing: "easeInCubic"
        }).bxSlider({
            auto: true,
            captions: true,
            pause: 6000,
            speed: 1000,
            useCSS: false,
            easing: "easeInOutCubic",
            pager: false,
            onSliderLoad: function () {
                $("#loader-gif").remove();
            }
        });
 
        //Init Parallax if not mobile device - uses jquery.detect.mobile.min.js - http://detectmobilebrowsers.com/
        if (!$.browser.mobile) {
            //Parallax effect (X-Browser) - Dropped mobile support
            $.stellar({
                horizontalScrolling: false,
                hideDistantElements: false
            });
        }
    }
    img.src = url;
    if (img.complete) img.onload();

    //Fix Slider responsiveness
    fixSliderResponsiveness();

    $(window).bind("resize", function () {
        fixSliderResponsiveness();
    });

});

//Fixes Slider responsiveness
function fixSliderResponsiveness() {
    var height = $(window).width() / 1.9;
    if ($(window).height() > $(window).width()) {
        height = $(window).height() / 1.9;
        $(".slide1, .slide2, .slide3").css({ "height": height, "background-position": "0 0" });
        if ($(window).height() > $(window).width()+230) {
                    $(".slide1, .slide2, .slide3").css({ "height": height, "background-position": "-100px 50%" });
        }
    } else {
        $(".slide1, .slide2, .slide3").css({ "height": height, "background-position": "0 0" });
    }
    $(".bx-viewport").css("height", "auto");
}