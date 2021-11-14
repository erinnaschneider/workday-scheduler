var saveButton = $(".save-btn");

// click save button
saveButton.on("click", function() {
    //get the data-id from btn
    var id = $(this).attr("data-id");
    //find the corresponding text with that id
    var text = $("#" + id).val();
    //save that to local storage
    localStorage.setItem(id, text);
});

function loadText() {
    // get the current hour
    var thisHour = moment().hour();

    for (let i = 8; i < 21; i++) {
        // get the text from local storage
        var text = localStorage.getItem(i);
        
        $("#" + i).val(text);
        // thisHour < i = future
        if (thisHour < i) {
            $("#" + i).addClass("future");
        }
        // thisHour = i = now
        else if (thisHour === i) {
            $("#" + i).addClass("present");
        }
        // thisHouse > i = past
        else if (thisHour > i) {
            $("#" + i).addClass("past");
        }
    }
};

function currentTime() {
    //get the full day, full month and data
    var currentDay = moment().format("dddd, MMMM Do");
    //set the header to say the day
    $("#currentDay").html(currentDay);
};

currentTime();
loadText();
setInterval(loadText,((1000*60)*15));