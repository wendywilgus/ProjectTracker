let timeDisplay = $('#time-display');

//display date and time using Moment.js
function displayTime() {
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplay.text(rightNow);
}

setInterval(displayTime, 1000);