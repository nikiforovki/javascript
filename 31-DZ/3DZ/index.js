const timerElement = document.getElementById('active-timer');

let seconds = 0;
let startTime = Date.now();
let timerInterval = null;
function initTimer() {
    const savedTime = sessionStorage.getItem('activeTime');
    if (savedTime) {
        seconds = parseInt(savedTime, 10);
        const lastSaveTime = parseInt(sessionStorage.getItem('lastSaveTime'), 10);
        const currentTime = Date.now();
        const elapsedSeconds = Math.floor((currentTime - lastSaveTime) / 1000);
        seconds += elapsedSeconds;
    }
    updateTimerDisplay();
    sessionStorage.setItem('lastSaveTime', Date.now().toString());
    startTimer();
}

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        secs.toString().padStart(2, '0')
    ].join(':');
}
function updateTimerDisplay() {
    timerElement.textContent = formatTime(seconds);
}
function updateTimer() {
    const elapsedMilliseconds = Date.now() - startTime;
    seconds += Math.floor(elapsedMilliseconds / 1000);
    startTime = Date.now();
    updateTimerDisplay();
    sessionStorage.setItem('activeTime', seconds.toString());
    sessionStorage.setItem('lastSaveTime', Date.now().toString());
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

window.addEventListener('beforeunload', () => {
    clearInterval(timerInterval);
    sessionStorage.setItem('activeTime', seconds.toString());
    sessionStorage.setItem('lastSaveTime', Date.now().toString());
});

window.addEventListener('DOMContentLoaded', initTimer);