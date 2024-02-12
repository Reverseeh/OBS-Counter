const code = Math.random().toString(36).slice(-5);
document.title = `OBS Counter (${code})`;
$("#code").html(code);

var align = "center";

$(document).on("click", async function (event) {
    const id = event.target.id.replace("img-", "");
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
    } else if(id == "textAlign") {
        if(align == "center") {
            $("#mainNum").css({"text-align": "left"});
            $("#img-textAlign").attr("src","assets/align left.svg");
            align = "left";
        } else if(align == "left") {
            $("#mainNum").css({"text-align": "right"});
            $("#img-textAlign").attr("src","assets/align right.svg");
            align = "right";
        } else if(align == "right") {
            $("#mainNum").css({"text-align": "center"});
            $("#img-textAlign").attr("src","assets/align center.svg");
            align = "center";
        }
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