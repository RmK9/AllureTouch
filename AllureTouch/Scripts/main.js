$(document).ready(function() {
    //Configure bootstrap navbar onHover event
    var navbarPortfolioItem = $("#menu-item-portfolio");

    $("#menu-item-portfolio, #menu-item-portfolio ul.dropdown-menu").mouseover(function() {
        $(".navbar-dropdown").css("color", "#ff4d00");
        navbarPortfolioItem.addClass("open");
    });

    navbarPortfolioItem.mouseout(function () {
        if ($(this).attr("class").indexOf("active") < 0 && $(this).attr("class").indexOf("open") > -1) {
            $(".navbar-dropdown").css("color", "#777");
        }
        $(this).removeClass("open");
    });

    //Smooth Scrolling (X-Browser) - Uses jQuery Mousewheel Plugin
    $(function() {
        $.srSmoothscroll({
            step: 60,
            speed: 400,
            ease: "easeOutExpo",
            target: $("body"),
            container: $(window)
        });
    });

    //Fix upper page responsiveness
    fixUpperPageResponsiveness();

    $(window).bind("resize", function() {
        fixUpperPageResponsiveness();
    });

    //FAQ Page Accordion onContentShow change "+" to "-"
    $(".panel-collapse.collapse").on("show.bs.collapse", function() {
        $(this).parent().find("i.fa.fa-plus").replaceWith("<i class='fa fa-minus'></i> ");
    });

    //FAQ Page Accordion onContentHide change "-" to "+"
    $(".panel-collapse.collapse").on("hide.bs.collapse", function() {
        $(this).parent().find("i.fa.fa-minus").replaceWith("<i class='fa fa-plus'></i> ");
    });

});

//Fixes upper page responsiveness
function fixUpperPageResponsiveness() {
    if ($(window).width() < 825) {
        $(".upper-social-icons").css({
            "position": "relative",
            "display": "block",
            "text-align": "center",
            "left": "5px",
            "top": "0",
            "padding-bottom": "15px"
        });
    } else {
        $(".upper-social-icons").css({ "position": "absolute", "left": "40px", "top": "55px" });
    }
}