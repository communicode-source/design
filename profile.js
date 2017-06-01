$("#portfolio").hide();
$("#reviews").hide();
$(".popup").hide();

$("#abtLnk").on('click', function () {
    $("#portfolio").hide();
    $("#prtLnk").removeClass('active').addClass('inactive');
    $("#reviews").hide();
    $("#rvwLnk").removeClass('active').addClass('inactive');
    $("#abtLnk").removeClass('inactive').addClass('active');
    $("#about").show();
});

$("#prtLnk").on('click', function () {
    $("#about").hide();
    $("#abtLnk").removeClass('active').addClass('inactive');
    $("#reviews").hide();
    $("#rvwLnk").removeClass('active').addClass('inactive');
    $("#prtLnk").removeClass('inactive').addClass('active');
    $("#portfolio").show();
});

$("#rvwLnk").on('click', function () {
    $("#portfolio").hide();
    $("#prtLnk").removeClass('active').addClass('inactive');
    $("#about").hide();
    $("#abtLnk").removeClass('active').addClass('inactive');
    $("#rvwLnk").removeClass('inactive').addClass('active');
    $("#reviews").show();
});


function closeThings(selector) {
    $(selector).hide();
}

function showThings(selector) {
    $(selector).show();
}

function popup(className) {
    var param = ".popup" + className;
    showThings(param);
}

function popdown(className) {
    var param = ".popup" + className;
    closeThings(param);
}

$(".item.item1").click(function () {
    popup(".popup1");
})
$(".btnclose.close1").click(function () {
    popdown(".popup1");
})
