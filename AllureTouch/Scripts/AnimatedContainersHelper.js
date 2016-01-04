$(document).ready(function() {
    //Bind Contact us page animated container with onHover event
    bindContainers();

});

//Contact us page animated containers
//Binds HoverIn-HoverOut for desktop use
//And ClickOn-FocusOut to accomodate mobile use
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
}

function changeStylesToAnimatedContent(div, hoverOn) {
    var constructedClass = "div #below-" + $(div).attr("class").replace(" colored-container","").split(" ").pop();
    if (hoverOn) {
        //Change bg-color
        $(div).parent().stop().animate({
            backgroundColor: "black"
        }, 250, "linear");
        //Move title text and icon more to the top
        $(div).find("div div").stop().animate({
            top: "50px"
        }, 500, "easeOutBack");
        //Change text color to white
        $(div).find("div div i, div div p").stop().animate({
            color: "white"
        }, 250, "linear");
        //Move bottom text up
        $(div).find(constructedClass).stop().animate({
            top: "50px"
        }, 500, "easeOutBack");
        //Make text visible
        $(div).find(constructedClass).css("visibility", "visible");
    } else {
        constructedClass = "div #below-" + $(div).attr("class").replace(" colored-container", "").split(" ").pop();
        //Change bg-color
        if (constructedClass.search("address") === -1) {
            $(div).parent().stop().animate({
                backgroundColor: "#e0a240"
            }, 250, "linear");
        } else {
            $(div).parent().stop().animate({
                backgroundColor: "#EFEFEF"
            }, 250, "linear");
        }
        //Move title text and icon back to the middle
        $(div).find("div div").stop().animate({
            top: "90px"
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
            top: "188px"
        }, 500, "easeOutBack");
    }
}