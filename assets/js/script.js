// DOM elements variables
var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn")
var hourBlockEl = $(".time-block");
var hourNow = moment().format('HH');
// Function to display time on jumbotron
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');

    currentDayEl.text(rightNow);
    // console.log(hourNow);
}
setInterval(displayTime, 1000);
// function to check current hour and apply past present future classes
function hourCheck() {
    // will go through each hourBlock to apply classes
    hourBlockEl.each(function() {
        //pulling in the hour id block i set in HTML
        var hourBlock = parseInt($(this).attr("id"));
        //case statements to check current hours, will apply past, present, future classes 
        if (hourNow > hourBlock) {
            $(this).toggleClass("past");
        } //else 
        if (hourNow === hourBlock) {
            $(this).toggleClass("present");
        } //else
        if (hourNow < hourBlock) {
            $(this).toggleClass("future");
        }
    })
    console.log("hourNow is " + hourNow);

}

$(document).ready(function() {
    // event listener for saveBtn 
    saveBtnEl.on("click", function() {
        // saving the text and hour from the targeted block 
        var hourBlock = $(this).parent().attr("id");
        var savedText = $(this).siblings(".description").val();
        // saving hourBlock and savedText to local storage 
        localStorage.setItem(hourBlock, savedText);
    })
    hourCheck();

    // There has to be a more efficient way than doing it this way 
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
})

function saveText() {

}