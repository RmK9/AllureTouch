$("#menu-item-portfolio").mouseout(function() {
    $(".dropdown-toggle").css("color", "#777");
});



$("#menu-item-portfolio").mouseover(function () {
    $(".dropdown-toggle").css("color", "#ff4d00");
    $(".dropdown-menu").mouseover(function () {
        $(".dropdown-toggle").css("color", "#777");
    });
});