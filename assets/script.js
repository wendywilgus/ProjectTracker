const moment = require("moment");

let timeDisplay = $('#time-display');
let projectModal = $('#project-modal');
let projectForm = $('#project-form');
let projectName = $('#project-name-input');
let projectType = $('#project-type-input');
let hourlyRate = $('#hourly-rate-input');
let dueDate = $('#due-date-input');


//display date and time using Moment.js
function displayTime() {
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplay.text(rightNow);
}

function printData(name, type, hourlyRate, dueDate) {
    let projectRow = $('<tr>');
    let projectNameEl = $('<td>').addClass('p-2').text(name);
    let projectTypeEl = $('<td>').addClass('p-2').text(type);
    let hourlyRateEl = $('<td>').addClass('p-2').text(hourlyRate);

    let dueDateEl = $('<td>').addClass('p-2').text(dueDate);
    let daysToDate = moment(dueDate, 'MM/DD/YYY').diff(moment(), 'days');
    let daysRemaining = $('<td>').addClass('p-2').text(daysToDate);

    let totalEarnings = calculateTotalEarnings(hourlyRate, daysToDate);

    let totalTdEl = $('<td>').addClass('p-2').text('$' + totalEarnings);

    let deleteProject = $('<td>').addClass('p-2').text('X');

    projectRow.append(
        projectNameEl,
        projectTypeEl,
        hourlyRateEl,
        dueDateEl,
        daysRemaining,
        totalTdEl,
        deleteProject,
    );
}


setInterval(displayTime, 1000);