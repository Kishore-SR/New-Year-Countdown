const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
let h = document.querySelector('h1');

// To get current year and calculate the next year
const currentYear = new Date().getFullYear();
const nextNewYear = new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime();
h.innerText=`New Year Countdown - ${currentYear+1}`;

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = nextNewYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;

    // To calculate total time for progress bar
    const totalTime = nextNewYear - new Date(`January 1, ${currentYear} 00:00:00`).getTime();
    const progress = ((totalTime - timeLeft) / totalTime) * 100;
    progressBar.value = progress.toFixed(2);

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        progressText.innerText = "🎉 Happy New Year 🎉"; //Wishes on 'New Year' day
        progressBar.value = 100;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
