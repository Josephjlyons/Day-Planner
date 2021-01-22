let currentDate = document.getElementById("currentDate");
let currentTime = document.getElementById("currentTime");
let currentContainer;



$("document").ready(function () {
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
// Shows saved localstorage and shows on page 
function renderAppoint() {
    var hr9 = localStorage.getItem("9am");
    var hr10 = localStorage.getItem("10am");
    var hr11 = localStorage.getItem("11am");
    var hr12 = localStorage.getItem("12pm");
    var hr1 = localStorage.getItem("1pm");
    var hr2 = localStorage.getItem("2pm");
    var hr3 = localStorage.getItem("3pm");
    var hr4= localStorage.getItem("4pm");
    var hr5 = localStorage.getItem("5pm");
    document.getElementById("9am").innerHTML = hr9;
    document.getElementById("10am").innerHTML = hr10;
    document.getElementById("11am").innerHTML = hr11;
    document.getElementById("12pm").innerHTML = hr12;
    document.getElementById("1pm").innerHTML = hr1;
    document.getElementById("2pm").innerHTML = hr2;
    document.getElementById("3pm").innerHTML = hr3;
    document.getElementById("4pm").innerHTML = hr4;
    document.getElementById("5pm").innerHTML = hr5;
};
renderAppoint();

    // Saving notes to local enabling save button
    $(".saveBtn").on("click", function storeAppoint() {

        let hour = $(this).attr("data-hour");
        let textarea = $("#" + hour);
        let appointArr = textarea.val();


        localStorage.setItem(hour, JSON.stringify(appointArr))
    });

});