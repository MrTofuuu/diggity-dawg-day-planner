// DOM elements
var currentDayEl = $("#currentDay");

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(rightNow);
    // console.log(rightNow);
}

setInterval(displayTime, 1000);