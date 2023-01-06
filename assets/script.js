// const moment = require("moment");

let timeDisplayEl = $('#time-display');
let projectModalEl = $('#project-modal');
let projectFormEl = $('#project-form');
let projectNameInputEl = $('#project-name-input');
let projectTypeInputEl = $('#project-type-input');
let hourlyRateInputEl = $('#hourly-rate-input');
let dueDateInputEl = $('#due-date-input');
let projectDisplayEl = $('#project-display');



//display date and time using Moment.js
function displayTime() {
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(rightNow);
    console.log("displayTime");
}

function printData(name, type, hourlyRate, dueDate) {
    let projectRow = $('<tr>');
    let projectNameTdEL = $('<td>').addClass('p-2').text(name);
    let projectTypeTdEl = $('<td>').addClass('p-2').text(type);
    let rateTdEl = $('<td>').addClass('p-2').text(hourlyRate);

    let dueDateTdEl = $('<td>').addClass('p-2').text(dueDate);
    let daysToDate = moment(dueDate, 'MM/DD/YYY').diff(moment(), 'days');
    let daysRemainingTdEl = $('<td>').addClass('p-2').text(daysToDate);

    let totalEarnings = calculateTotalEarnings(hourlyRate, daysToDate);

    let totalTdEl = $('<td>').addClass('p-2').text('$' + totalEarnings);

    let deleteProject = $('<td>').addClass('p-2 delte-project-btn text-center').text('X');

    projectRow.append(
        projectNameTdEL,
        projectTypeTdEl,
        rateTdEl,
        dueDateTdEl,
        daysRemainingTdEl,
        totalTdEl,
        deleteProject,
    );

    projectDisplayEl.append(projectRow);

    projectModalEl.modal('hide');
}

function calculateTotalEarnings(rate, days) {
    let dailyTotal = rate * 8;
    let total = dailyTotal * days;
    return total;
}

function handleDelete(event) {
    let btnClicked = $(event.target);
    btnClicked.parent('tr').remove();
}

function handleProjectSubmission(event) {
    event.preventDefault();

    let projectName = projectNameInputEl.val().trim();
    let projectType = projectTypeInputEl.val().trim();
    let hourlyRate = hourlyRateInputEl.val().trim();
    let dueDate = dueDateInputEl.val().trim();

    printData(projectName, projectType, hourlyRate, dueDate);

    projectFormEl[0].reset();
}

projectFormEl.on('submit', handleProjectSubmission);
projectDisplayEl.on('click', '.delete-project-btn', handleDelete);
dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);