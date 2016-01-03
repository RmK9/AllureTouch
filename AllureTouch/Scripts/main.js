$(document).ready(function() {
    //Configure bootstrap navbar onHover event
    $("#menu-item-portfolio").mouseout(function() {
        $(".dropdown-toggle").css("color", "#777");
    });

    $("#menu-item-portfolio").mouseover(function() {
        $(".dropdown-toggle").css("color", "#ff4d00");
        $(".dropdown-menu").mouseover(function() {
            $(".dropdown-toggle").css("color", "#777");
        });
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

    //Bind Contact us page animated container with onHover event
    bindContainers();

});

//Contact us page animated containers
//onClick event binder
function bindContainers() {
    $(".animated-container .email-container").on({
        mouseenter: function () { changeStylesToAnimatedContent(this, true) },
        click: function() { changeStylesToAnimatedContent(this, true) },
        mouseleave: function() { changeStylesToAnimatedContent(this, false) },
        focusout: function() { changeStylesToAnimatedContent(this, false) }
    });

    $(".animated-container .address-container").on({
        mouseenter: function () { changeStylesToAnimatedContent(this, true) },
        click: function () { changeStylesToAnimatedContent(this, true) },
        mouseleave: function () { changeStylesToAnimatedContent(this, false) },
        focusout: function () { changeStylesToAnimatedContent(this, false) }
    });
 
    $(".animated-container .hours-container").on({
        mouseenter: function () { changeStylesToAnimatedContent(this, true) },
        click: function () { changeStylesToAnimatedContent(this, true) },
        mouseleave: function () { changeStylesToAnimatedContent(this, false) },
        focusout: function () { changeStylesToAnimatedContent(this, false) }
    });

    //Disable bottom text container to fire hover effect to prevent unexpected behaviour
    $(".animated-container div .below-container").hover(function (evt) { evt.stopPropagation(); return false; });
}

function changeStylesToAnimatedContent(div, hoverOn) {
    var constructedClass = "div #below-" + $(div).attr("class").split(" ").pop();
    if (hoverOn) {
        //Change bg-color
        $(div).stop().animate({
            backgroundColor: "black"
        }, 250, "linear");
        //Move title text and icon more to the top
        $(div).find("div div").stop().animate({
            top: "60px"
        }, 500, "easeOutBack");
        //Change text color to white
        $(div).find("div div i, div div p").stop().animate({
            color: "white"
        }, 250, "linear");
        //Move bottom text up
        $(div).find(constructedClass).stop().animate({
            top: "60px"
        }, 500, "easeOutBack");
        //Make text visible
        $(div).find(constructedClass).css("visibility", "visible");
    } else {
        constructedClass = "div #below-" + $(div).attr("class").split(" ").pop();
        //Change bg-color
        if (constructedClass.search("address") === -1) {
            $(div).stop().animate({
                backgroundColor: "#e0a240"
            }, 250, "linear");
        } else {
            $(div).stop().animate({
                backgroundColor: "#EFEFEF"
            }, 250, "linear");
        }
        //Move title text and icon back to the middle
        $(div).find("div div").stop().animate({
            top: "100px"
        }, 500, "easeOutBack");
        //Change text color to orange
        $(div).find("div i, div p").stop().animate({
            color: "#4c4c4c"
        }, 250, "linear", function () {
            //Make text invisible again
            $(div).find(constructedClass).css("visibility", "hidden");
        });
        //Move bottom text back down
        $(div).find(constructedClass).stop().animate({
            top: "190px"
        }, 500, "easeOutBack");
    }

}

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