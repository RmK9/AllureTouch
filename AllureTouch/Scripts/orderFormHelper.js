var index = 0;

$(document).ready(function () {

    //var currDate = new Date().toJSON();
    //currDate = currDate.slice(8, 10) + currDate.slice(4, 8) + currDate.slice(0, 4);

    Dropzone.options.imageDropzone = {
        url: "/SaveUploadedFile",
        dictDefaultMessage: "Drag and Drop or simply Click on this field to upload images",
        uploadMultiple: true,
        parallelUploads: 100,
        maxFiles: 100,
        addRemoveLinks: true,

        // The setting up of the dropzone
        init: function() {
            var myDropzone = this;

            this.on("addedfile", function(file) {
                $("#inside-order-form-container p.hidden-tag").show(400, "easeOutQuart");
                $("#inside-order-form-container #loading-gif").show();
            });

            this.on("completemultiple", function (response) {
                $("#inside-order-form-container #loading-gif").hide();
                var resp = JSON.parse(response[0].xhr.responseText);

                $.each(resp, function(key, data) {
                    $.each(data, function(index, data) {
                        appendImageContainer(data);
                    });
                });

            });

            this.on("removedfile", function (file) {
                var imageName = file.name;

                if (file.xhr.responseText !== null) {
                    var resp = JSON.parse(file.xhr.responseText);
                    var initialImageName;

                    $.each(resp, function(key, data) {
                        $.each(data, function(index, data) {
                            initialImageName = data.substr(0, data.lastIndexOf("(")) + data.substr(data.lastIndexOf(")") + 1, data.length);
                            initialImageName = initialImageName.substr(initialImageName.lastIndexOf("/") + 1, initialImageName.length);

                            if (initialImageName === imageName) {
                                deleteImageAndContainer(data.substr(data.lastIndexOf("/") + 1, data.length));
                            }
                        });
                    });
                } else {
                    deleteImageAndContainer(imageName);
                }
            });

            $("input.picture-remove-confirm").on("click", function() {
                var name = $(this).attr("data-name");
                $.each(myDropzone.files, function () {
                    //If filename has the removed name exluding .*image-format*
                    if (name.substr(0, name.lastIndexOf(".")).indexOf(this.name.substr(0, this.name.lastIndexOf("."))) > -1) {
                        myDropzone.removeFile(this);
                    }
                });
            });

        }

    }

    $(document).on("click", "span.remove-image", function () {
        $("input.picture-remove-confirm").attr("data-name", $(this).parent().parent().data("name"));
    });

});

function appendImageContainer(src) {

    $("#inside-order-form-container button").prop("disabled", false);

    var imageName = src.substr(src.lastIndexOf("/") + 1, src.length);

    var imageContainerDiv =
        "<div class='row image-container' data-name='" + imageName + "' data-index='" + index + "'>" +
            "<a href='#' class='remove-picture-link' data-toggle='modal' data-target='#remove-picture'>" +
                "<span class='glyphicon glyphicon-remove remove-image' aria-hidden='true'></span>" + 
            "</a>" +
            "<div class='col-xs-12 col-sm-6 col-md-4'>" +
                "<img src='" + src + "' class='img-thumbnail uploaded-image center-block'/>" +
            "</div>" +

            "<div class='col-xs-12 col-sm-6 col-md-8'>" +
                "<p class='form-title text-center'>Select Image Editing Type:</p>" +
                "<div class='text-center' data-toggle='buttons'>" +
                    "<label class='btn btn-default'>" +
                        "<input type='radio' name='Images[" + index + "].EditingType' value='Realistic' required/> Realistic" +
                    "</label>" +
                    "<label class='btn btn-default middle-label'>" +
                        "<input type='radio' name='Images[" + index + "].EditingType' value='RealisticAndBackground'/> Realistic + Background Replacement" +
                    "</label>" +
                    "<label class='btn btn-default'>" +
                        "<input type='radio' name='Images[" + index + "].EditingType' value='FashionOrCreative'/> Fashion or Creative" +
                    "</label>" +
                "</div>" +

                "<hr class='image-container-hr'/>" +

                "<p class='text-center'>Add a Description:</p>" +

                "<textarea class='form-control' name='Images[" + index + "].EditingDescription' placeholder='Being as descriptive as" +
                " possible helps us to accurately edit and tailor the image just the way you desire' required></textarea>" +

                "<input type='hidden' name='Images[" + index + "].ImageName' value='" + imageName + "'/>" +
                "<input type='hidden' name='Images[" + index + "].ImagePath' value='" + src + "' />" +
            "</div>" +
        "</div>";

    $("#dynamic-image-container").append(imageContainerDiv);

    index++;
}

function shiftIndexes(removedIndex) {
    var currentIndex = 0;

    $("#dynamic-image-container").children("div.row.image-container").each(function() {
        currentIndex = $(this).attr("data-index");
        console.log("curr index: " + currentIndex);
        if (removedIndex < currentIndex) {
            $(this).attr("data-index", currentIndex - 1);
            $(this).find("[name*='Images']").each(function() {
                $(this).attr("name", $(this).attr("name").replace(currentIndex, currentIndex - 1));
            });
        }
    });
}

function deleteImageAndContainer(imageName) {

    $.ajax({
        url: "/RemoveUploadedFile",
        dataType: "json",
        type: "POST",
        data: { imageName: imageName },
        success: function (response) {
            if (response.success) {
                $("div[data-name='" + imageName + "']").fadeOut(400, "easeOutExpo", function () {
                    this.remove();
                    index--;
                    shiftIndexes($(this).data("index"));
                    if (index === 0) {
                        $("#inside-order-form-container p.hidden-tag").hide(400, "easeOutQuart");
                        $("#inside-order-form-container button").prop("disabled", true);
                    }
                });
            }
        },
        error: function(respone) {
            console.log("Error removing the image");
            console.log(respone);
        }
    });
}