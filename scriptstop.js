let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timer = null;
let lapCounter = 0;

function updateDisplay() {
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  let ms = milliseconds < 10 ? '0' + milliseconds : milliseconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}:${ms}`;
}

function startStopwatch() {
  if (timer !== null) return;
  timer = setInterval(() => {
    milliseconds += 1;
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
    }
    updateDisplay();
  }, 10);
}

function pauseStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  lapCounter = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = '';
}

function lapTime() {
  if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 0) return;
  lapCounter++;
  const lapList = document.getElementById("laps");
  const li = document.createElement("li");
  li.textContent = `Lap ${lapCounter}: ${document.getElementById("display").innerText}`;
  lapList.appendChild(li);
}

updateDisplay();
