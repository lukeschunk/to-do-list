$(document).ready(function () {

    var input = $("#main-input");


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

});