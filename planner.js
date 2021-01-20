let plannerText = "";
let appointmenttime = "";
let currentDate = document.getElementById("currentDate");
let currentTime = document.getElementById("currentTime");
let storedAppoint;
let returnedAppoint;
let hourContainer;
let currentContainer;

// Jumbotron Current Day Function

function showDateTime() {
    currentDate.innerHTML = dayjs().format("dddd - MMMM - YYYY");
    currentTime.innerHTML = dayjs().format("hh:mm A")
};

console.log(showDateTime())

// -------------------------------- //
// Have to make certain containers colors depending on time (PAST-PRESENT-FUTURE)
