// script.js
let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (timer !== null) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = '';
}

function lapTime() {
  if (hours === 0 && minutes === 0 && seconds === 0) return;
  const lapList = document.getElementById("laps");
  const li = document.createElement("li");
  li.textContent = document.getElementById("display").innerText;
  lapList.appendChild(li);
}
