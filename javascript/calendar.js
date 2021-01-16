document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "listMonth",
    googleCalendarApiKey: "AIzaSyAD1tn73Iqwc-UiAsUwxnGBsq109l7RBrs",
    events: {
      googleCalendarId: "richardlovelace811@gmail.com",
    },
  });
  
  calendar.render();
});
