document.title = `OBS Counter (${Math.random().toString(36).slice(-5)})`;

$(document).on("click", async function (event) {
    const id = event.target.id;
    //ADD +1 TO NUMBER
    if(id == "addNum") {
        if($("#mainNum").text() < 999) {
            $("#mainNum").animate({
                "font-size": 150
            }, 40 );
            $("#mainNum").html(parseInt($("#mainNum").text()) + 1);
            $("#setNum").val(parseInt($("#mainNum").text()));
            $("#mainNum").animate({
                "font-size": 190
            }, 40 );
            $("#mainNum").animate({
                "font-size": 180
            }, 40 );
        }
    //ADD -1 TO NUMBER
    } else if(id == "subNum") {
        if($("#mainNum").text() > -99) {
            $("#mainNum").animate({
                "font-size": 150
            }, 40 );
            $("#mainNum").html(parseInt($("#mainNum").text()) - 1);
            $("#setNum").val(parseInt($("#mainNum").text()));
            $("#mainNum").animate({
                "font-size": 190
            }, 40 );
            $("#mainNum").animate({
                "font-size": 180
            }, 40 );
        }
    //RESET NUMBER
    } else if(id == "resetNum") {
        $("#mainNum").animate({
            "font-size": 150
        }, 40 );
        $("#mainNum").html(0);
        $("#setNum").val(0);
        $("#mainNum").animate({
            "font-size": 190
        }, 40 );
        $("#mainNum").animate({
            "font-size": 180
        }, 40 );
    }
});

//SET CUSTOM NUMBER
$("#setNum").on("keyup paste", async function (event) {
    if($("#setNum").val() != "" && $("#setNum").val() <= 999 && $("#setNum").val() >= -99) {
        $("#mainNum").html(parseInt($("#setNum").val()));
    } else {
        $("#mainNum").html(0);
    }
});

//CHANGE NUMBER COLOR
$("#fontColor").on("input change", async function (event) {
    $("#mainNum").css({"-webkit-text-fill-color": $("#fontColor").val()});
});

//CHANGE NUMBER STROKE COLOR
$("#strokeColor").on("input change", async function (event) {
    $("#mainNum").css({"-webkit-text-stroke-color": $("#strokeColor").val()});
});