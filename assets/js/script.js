var currentDay = document.getElementById("currentDay");
var saveButton = $(".save-btn");
var clearButton = $("#clearBtn");


// click save button
saveButton.on("click", function() {
    //get the data-id from btn
    var id = $(this).attr("data-id");
    //find the corresponding text with that id
    var text = $("#" + id).val();
    //save that to local storage
    localStorage.setItem(id, text);
});

// click clear button
clearButton.on("click", function(event) {
    // identify each click event
   var clearTimeSlot = event.target.getAttribute("data-id");
   var userInput = localStorage.get() 
   
   console.log(event.target.getAttribute("data-id"));


    //localStorage.clear();
    //innerHTML = "";
});

function loadText() {
    // get the current hour
    var currentHour = moment().hour();

    for (let i = 8; i < 21; i++) {
        // get the text from local storage
        var text = localStorage.getItem(i);
        
        $("#" + i).val(text);
        // currentHour < i = future
        if (currentHour < i) {
            $("#" + i).addClass("future");
        }
        // currentHour = i = now
        else if (currentHour === i) {
            $("#" + i).addClass("present");
        }
        // currentHouse > i = past
        else if (currentHour > i) {
            $("#" + i).addClass("past");
        }
    }
};

function today() {
    // current date 
    var thisDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss");
    //set the header to say the day
    $("#currentDay").html(thisDate);
    
};

today();
loadText();
setInterval(loadText,((1000*60)*15));
setInterval(today, 1000)