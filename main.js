$(document).ready(function () {

    var input = $("#main-input");


    function changeInputSize(str) {
        input = $('#main-input');
        if (str.length > 20) {
            input.css("font-size", "2.5em");
            console.log('more than 20');
        }
    }

    $("body").on("keyup", '#main-input', function() {
        changeInputSize($("#main-input").val());
//        console.log("this is working");
    })

    $("#main-input").on("focus", function () {
        $(this).val("");

    });

    $("#main-input").on("click", function (event) {
        $(this).val("");
    });

    $("#main-input").on("keyup", function (event) {
        if (event.which == 13) {
            addToList();
        }
    });

    function addToList() {
        input = $("#main-input").val();
        $(".item-container").append("<p class='item'>" + input + "</p>");
        $("#main-input").val("");
        console.log(input);
        //        $(".item-container").append(input);
    }

    $(".item-container").on('click', 'p', function () {
        $(this).css({
            opacity: "0.3"
        }).addClass("secondClick");
    });

    //    $(".secondClick").on('click', function(){
    //       $(this).remove; 
    //    });

    $(".item-container").on('click', '.secondClick', function () {
        $(this).addClass("animation");
        setTimeout(function (that) {
            $(that).css("display", "none")
        }, 1000, this)

    });
});

//splice(. 1) when I click on this, splice this out of the array