document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "listMonth",
    googleCalendarApiKey: "AIzaSyDKWIW9XrOIv2jfjA1Ok0fUo8JOdrXD5v4",
    events: {
      googleCalendarId: "blackcloverbar@gmail.com",
    },
  });
  
  calendar.render();
});
