const timerStartBtn = document.querySelector("#timerStartBtn");
const timerEndBtn = document.querySelector("#timerEndBtn");

const timerHours = document.querySelector("#timerHours");
const timerMinutes = document.querySelector("#timerMinutes");
const timerSeconds = document.querySelector("#timerSeconds");
let intervalId;

timerStartBtn.addEventListener("click", () => {

    let hours = Number(timerHours.value.trim()) || 0;
    let minutes = Number(timerMinutes.value.trim()) || 0;
    let seconds = Number(timerSeconds.value.trim()) || 0;

    let totalTime = hours * 3600 + minutes * 60 + seconds;

    timerHours.disabled = true;
    timerMinutes.disabled = true;
    timerSeconds.disabled = true;
    timerStartBtn.disabled = true;

    if(totalTime > 0) {
        renderTimer(totalTime);

        intervalId = setInterval(() => {
            totalTime--

            if (totalTime < 0) {
                clearInterval(intervalId);
                clearTimerInputs()
                return;
            }

            renderTimer(totalTime);
        }, 1000)
    }
})

timerEndBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    clearTimerInputs()
})

function renderTimer (time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    timerHours.value = `${hours}`
    timerMinutes.value = `${minutes}`
    timerSeconds.value = `${seconds}`
}

function clearTimerInputs() {
    timerHours.disabled = false
    timerMinutes.disabled = false
    timerSeconds.disabled = false
    timerStartBtn.disabled = false;

    timerHours.value = '';
    timerMinutes.value = '';
    timerSeconds.value = '';
}
