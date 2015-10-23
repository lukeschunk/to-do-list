$(document).ready(function(){
    
    var todoApp = $("#todoApp");
    var todoTitle = $("<h1> jQuery todo App </h1>");
    var inputBox = $("<input placeholder='add an item..'>  </input>");
    var todoAddItemButton = $("<button> Add </button>");
    var todoClearButton = $("<button> Remove All Done </button>");
    var todoList = $("<ul> </ul>");
    var todoItem = $("<li> </li");
    //list
    //check as done
    //add new items
    var handleAdd = function() {
       var userText = inputBox.val();
            if(userText) {
                var newtodoItem = $("<li> </li");
                newtodoItem.text(userText);
                todoList.append(newtodoItem);
                inputBox.val("");
            }
    };
    
    todoClearButton.on("click", function(){
       $(".done").remove(); 
    });
    
    
    todoApp.append(todoTitle);
    todoApp.append(inputBox);
    todoApp.append(todoAddItemButton);
    todoApp.append(todoList);
    todoApp.append(todoClearButton);

    inputBox.on("keyup", function(event) {
         if(event.which == 13) {
             handleAdd();
         }
    });
    
    todoAddItemButton.on("click", handleAdd);
    
    todoList.on("click", "li", function() { //watching 
       var todoItem = $(this);
            todoItem.toggleClass("done"); //dont do .done - we're not selecting
    });
    
})