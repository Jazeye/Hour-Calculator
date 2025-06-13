document.getElementById("calculate").addEventListener("click", function(){
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const format = document.getElementById("format").value;

  if (start && end) {
    let startHours = parseInt(start.split(':')[0]);
    let startMinutes = parseInt(start.split(':')[1]);

    let endHours = parseInt(end.split(':')[0]);
    let endMinutes = parseInt(end.split(':')[1]);

    let total = (endHours + endMinutes/60) - (startHours + startMinutes/60);
    if (total < 0) total += 24;

    // Display total hours
    document.getElementById("result").innerHTML = "Total Hours: " + total.toFixed(2);

    // Format and show in console
    if (format === "12") {
      console.log(`Start (12-hour): ${formatTo12(startHours, startMinutes)} 
End (12-hour): ${formatTo12(endHours, endMinutes)} 
Total Hours: ${total.toFixed(2)}`);
    } else {
      console.log(`Start (24-hour): ${start}
End (24-hour): ${end}
Total Hours: ${total.toFixed(2)}`);
    }
  } else {
    document.getElementById("result").innerHTML = "Please select both start and end time.";
  }
});

// Format to 12-Hour format
function formatTo12(hour, minutes) {
  let suffix = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  if (hour === 0) hour = 12;

  return `${hour}:${minutes.toString().padStart(2, "0")} ${suffix}`;
}
