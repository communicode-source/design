$(".warning").hide();

var numElements = $("#talents").children().length;
$(".button").find(".fa-times").on("click", function () {
    if (numElements > 3) {
        $(this).parent().hide();
        numElements--;
    } else {
        $(".warning").show();
    }
});
