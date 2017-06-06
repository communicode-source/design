// Step Three
$(".fa-check").hide();
$(".cal").hide();

$(".item").on("click", function () {
    if (!($(".item").hasClass("select"))) {
        $(".item").removeClass("select");
    }
    if (!($(this).hasClass("select"))) {
        $(this).addClass("select");
        $(this).find(".info").find(".icon").hide();
        $(this).find(".info").find(".fa-check").show();
    } else {
        $(this).removeClass("select");
        $(this).find(".info").find(".icon").show();
        $(this).find(".info").find(".fa-check").hide();
    }
});

$(".button").on("click", function () {
    $(this).next().toggle();
});
