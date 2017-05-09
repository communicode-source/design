var xPos = 0;

$("#handle").draggable({
    axis: "x",
    containment: "parent"
});


function getPosition(el) {
    xPos = (el.offsetLeft - el.scrollLeft + el.clientLeft);
    return xPos;
}

$("#handle").on(
    "drag",
    function (event, ui) {
        var xpos = getPosition(document.querySelector("#handle"));
        // turn xposition to percent for background
        var left = 22,
            mid = 112.5,
            right = 247;

        var percent = (xpos) * .39;
        if (percent > 60) {
            $("#leftSide").css({
                "border-bottom-left-radius": "25px",
                "border-top-left-radius": "25px",
                "border-top-right-radius": "20px",
                "border-bottom-right-radius": "20px"
            });
        } else {
            $("#leftSide").css({
                "border-bottom-left-radius": "25px",
                "border-top-left-radius": "25px",
                "border-top-right-radius": "0px",
                "border-bottom-right-radius": "0px"
            });

        }
        $("#leftSide").css({
            width: percent + "%"
        });
    }
);
