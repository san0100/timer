// Set the target date
const targetDate = new Date("2025-04-23T00:00:00").getTime(); // Updated to April 23, 2025

function updateTimer() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Check if the target date is in the future
  if (timeLeft > 0) {
    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  } else {
    // Display a message if the target date has passed
    document.querySelector(".timer").innerHTML = "<h2>The special day has already passed! ❤️</h2>";
  }
}

// Update every second
setInterval(updateTimer, 1000);
updateTimer(); // Initial call
