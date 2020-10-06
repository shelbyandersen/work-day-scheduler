//DOM VARIABLES
var workDay = [
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

var currentDay = moment().format("dddd, MMMM Do");
console.log(currentDay);

//JS VARIABLES
//FUNCTION DEFINITIONS
//FUNCTION CALLS

//Current day is displayed in heading (momentJS)
$("#currentDay").append(currentDay);

//Create time blocks for 9AM - 5PM in JS

//Grey - Time has passed, Red - Current hour, Green - Open

//User can type in the time blocks when they click in it

//Lock button saves the event (saved in local storage)

//When page is refreshed events should still show
