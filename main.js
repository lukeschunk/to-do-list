$(document).ready(function () {
    console.log("test");
    var input = $("#main-input").val();
    var input2 = $("#main-input");


    $("#main-input").on("focus", function () {
        $(this).val("");

    });

    $("#main-input").on("click", function (event) {
        $(this).val("");
    });

    $("#main-input").on("keyup", function (event) {
        if (event.which == 13) {
            addToList();
            input2.val("");
        }
    });

    function addToList() {
        input = $("#main-input").val();
        $(".item-container").append(input);
        console.log(input);
//        $(".item-container").append(input);
    }




});