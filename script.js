document.getElementById('calculate').addEventListener('click', () => {
  const start = document.getElementById('start').value;
  const end = document.getElementById('end').value;

  if (start && end) {
    let [startHours, startMinutes] = start.split(':').map(Number);
    let [endHours, endMinutes] = end.split(':').map(Number);

    let startTotal = startHours * 60 + startMinutes;
    let endTotal = endHours * 60 + endMinutes;

    if (endTotal < startTotal) {
      endTotal += 24 * 60; // handle overnight work
    }

    let diff = endTotal - startTotal;
    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;

    document.getElementById('result').innerHTML = 
      `Total Hours: ${hours} hours and ${minutes} minutes`;
  } else {
    document.getElementById('result').innerHTML = `Total Hours: 0`;
  }
});
