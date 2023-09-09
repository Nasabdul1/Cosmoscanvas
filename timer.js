// JavaScript for the countdown timer
function updateCountdown() {
    const endDate = new Date('2023-09-30 00:00:00').getTime(); // Set your end date and time here
    const now = new Date().getTime();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
        clearInterval(interval); // Stop the timer when it reaches zero
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial call to update countdown
updateCountdown();

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
