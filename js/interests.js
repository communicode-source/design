$("#interests").css('visibility', 'hidden');

$("form > button").on('click', function () {
    $("#interests").css('visibility', 'visible').addClass('fadeIn');
});
