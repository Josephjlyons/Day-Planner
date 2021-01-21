let plannerText = "";
let appointmenttime = "";
let currentDate = document.getElementById("currentDate");
let currentTime = document.getElementById("currentTime");
let storedAppoint;
let returnedAppoint;
let hourContainer;
let currentContainer;
const container = document.getElementsByClassName("container")

// Jumbotron Current Day Function

function showDateTime() {
    currentDate.innerHTML = dayjs().format("dddd - MMMM - YYYY");
    currentTime.innerHTML = dayjs().format("hh:mm A")
}; showDateTime()



// -------------------------------- //
// Have to make certain containers colors depending on time (PAST-PRESENT-FUTURE)
pastPresFuture();
function pastPresFuture(){
    for (i = 0; i <= 23; i++) {
        currentContainer = i;
        currentTime = dayjs().format("H")

    if (currentTime > i) {
        $("#" + currentContainer).addClass("past");
        $("#" + currentContainer).children("div").children("appointmentNotes").addClass("past");
    }
    else if (currentTime == i) {
        $("#" + currentContainer).addClass("present");
        $("#" + currentContainer).children("div").children("appointmentNotes").addClass("present");
    }
    else if (currentTime < i) {
        $("#" + currentContainer).addClass("future");
        $("#" + currentContainer).childer("div").children("appointmentNotes").addClass("future");
    }

}}

