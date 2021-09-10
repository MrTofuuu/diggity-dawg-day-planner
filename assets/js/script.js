// DOM elements
var currentDayEl = $("#currentDay");

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    var hourNow = moment().format('HH')
    currentDayEl.text(rightNow);
    console.log(hourNow);
}

setInterval(displayTime, 1000);