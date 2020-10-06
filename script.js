$(document).ready(function () {
  // DOM VARIABLES
  var currentDay = moment().format("dddd, MMMM Do");
  var nineAm = $("09");
  var tenAm = $("10");
  var elevenAm = $("11");
  var noon = $("12");
  var onePm = $("13");
  var twoPm = $("14");
  var threePm = $("15");
  var fourPm = $("16");
  var fivePm = $("17");
  var hour = moment().hours();

  // Current day is displayed in heading (momentJS)
  $("#currentDay").append(currentDay);

  // Change textarea background color based on time
  // Grey - Time has passed, Red - Current hour, Green - Future

  var checkTime = function () {
    //Get current time
    var currentTime = moment().format("H");

    // Elements with class "taskarea" - these are the time-blocks
    var timeBlockElements = $(".form-control");

    // Loop through the taskarea elements to check time
    for (var i = 0; i < timeBlockElements.length; i++) {
      //Get element i's ID as a string
      var elementID = timeBlockElements[i].id;

      // Get elements by ID
      var timeEl = document.getElementById(timeBlockElements[i].id);

      // Remove old class from element
      $(timeBlockElements[i].id).removeClass(".present .past .future");

      // Add new past/present/future class based on current hour
      if (elementID < currentTime) {
        $(timeEl).addClass("past");
      } else if (elementID > currentTime) {
        $(timeEl).addClass("future");
      } else {
        $(timeEl).addClass("present");
      }
    }
  };

  // Check the time every 5 minutes
  setInterval(checkTime(), 1000 * 60 * 5);

  //Lock button saves the event (saved in local storage)
});
