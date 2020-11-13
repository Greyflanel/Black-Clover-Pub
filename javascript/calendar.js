document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "listMonth",
    googleCalendarApiKey: "",
    events: {
      googleCalendarId: "",
    },
  });
  
  calendar.render();
});
