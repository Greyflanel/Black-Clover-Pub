document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    googleCalendarApiKey: "AIzaSyCdPcedSFOEqBmQe-4lTQEvMkn7Is9a5Ig",
    events: {
      googleCalendarId: "richardlovelace811@gmail.com",
    },
  });
  console.log(calendar)
  calendar.render();
});
