$(document).ready(function () {
    //Get each picture div element
    $(".picture-container").each(function() {
        var $picContainer = $(this),
            getItems = function() {
                var items = [];
                //Assign relevant picture information
                $picContainer.find("a").each(function() {
                    var $href = $(this).attr("href"),
                        //$width = $(this).children("img").width() * 5,
                        //$height = $width * 0.75249;
                        $width = $(this).children("img").get(0).naturalWidth,
                        $height = $(this).children("img").get(0).naturalHeight;
                    var item = {
                        src: $href,
                        w: $width,
                        h: $height
                    }
                    items.push(item);
                });
                return items;
            }

        var items = getItems();

        var $pswp = $(".pswp")[0];

        //Assign click event on figure element to open PhotoSwipe
        $picContainer.on("click", "figure", function(event) {
            event.preventDefault();

            var $index = $(this).children("a").data("index");
            var options = {
                index: $index,
                bgOpacity: 0.7,
                showHideOpacity: true
            }

            //Initialize PhotoSwipe
            var photoSwipe = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            photoSwipe.init();
        });
    });

    resizeImageOverlay();

    //Resize image overlay when resizing the window
    $(window).bind("resize", function () {
        resizeImageOverlay();
    });

});

//Adjust image overlay width and height
function resizeImageOverlay() {
    var rectangle;
    $(".picture-container").find("img").each(function () {
        rectangle = $(this).get(0).getBoundingClientRect();
        $(this).closest("figure").find(".content-hover").css("width", rectangle.width);
        $(this).closest("figure").find(".content-hover").css("height", rectangle.height);
    });
}