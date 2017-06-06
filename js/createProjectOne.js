// Step One
$("#options").hide();

$(".item").on("click", function () {
    $(".item").removeClass("on").addClass("off");
    if (!($(this).hasClass("on"))) {
        $(this).addClass("on").removeClass("off");
    } else {
        $(this).removeClass("on").addClass("off");
    }
});

$("li").on("click", function () {
    if ($(this).hasClass("one")) {
        $(".main").innerHTML = "Track 1";
    } else if ($(this).hasClass("two")) {
        $(".main").innerHTML = "Track 2";
    } else {
        $(".main").innerHTML = "Track 3";
    }
});

$("#list").on("click", function () {
    $("#options").toggle();
});

$(".pick").on("click", function () {
    if ($(this).hasClass("one")) {
        $(".start").children("p").html("Track 1");
    } else if ($(this).hasClass("two")) {
        $(".start").children("p").html("Track 2");
    } else {
        $(".start").children("p").html("Track 3");
    }
});
