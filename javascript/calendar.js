document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    googleCalendarApiKey: "",
    events: {
      googleCalendarId: "richardlovelace811@gmail.com",
    },
  });
  console.log(calendar)
  calendar.render();
});
