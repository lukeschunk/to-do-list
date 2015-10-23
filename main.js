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
        $(".item-container").append(input);
        $("#main-input").val("");
        input.addClass("item"); //THIS IS THE LINE I NEED TO WORK
                                //IT SHOULD LOOK LIKE THE OTHER P ELEMENTS                                 //THAT ARE HARD CODED IN THE HTML
        console.log(input);
//        $(".item-container").append(input);
    }




});