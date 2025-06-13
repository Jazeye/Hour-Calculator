document.getElementById("calculate").addEventListener("click", function(){
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;

  if (start && end) {
    let startHours = parseInt(start.split(':')[0]);
    let startMinutes = parseInt(start.split(':')[1]);

    let endHours = parseInt(end.split(':')[0]);
    let endMinutes = parseInt(end.split(':')[1]);

    // Calculate total minutes
    let total = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);
    if (total < 0) total += 24 * 60;

    let hours = Math.floor(total / 60);
    let minutes = total % 60;

    document.getElementById("result").innerHTML = 
      `Total Time: ${hours} hours and ${minutes} minutes`;
  } else {
    document.getElementById("result").innerHTML = "Please select both start and end time.";
  }
});
