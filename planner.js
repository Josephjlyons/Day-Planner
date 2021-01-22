$("document").ready(function(){
let appointmentTime = "";
let appointmentDate = "";
let currentDate = document.getElementById("currentDate");
let currentTime = document.getElementById("currentTime");
let storedAppoint;
let returnedAppoint;
let appointArr = [];
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
function pastPresFuture() {
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
            $("#" + currentContainer).children("div").children("appointmentNotes").addClass("future");
        }
        
    }
}




// Saving notes to local enabling save button
$(".saveBtn").on("click", function storeAppoint(){
    
    let hour = $(this).attr("data-hour");
    let textarea = $("#" + hour);
  let appointArr = textarea.val();


localStorage.setItem(hour,JSON.stringify(appointArr))
});

});