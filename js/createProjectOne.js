// Step One
$(".item").on("click", function () {
    $(".item").removeClass("on").addClass("off");
    if (!($(this).hasClass("on"))) {
        $(this).addClass("on").removeClass("off");
    } else {
        $(this).removeClass("on").addClass("off");
    }
});
