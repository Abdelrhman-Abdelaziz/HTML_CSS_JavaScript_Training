const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const mseconds = document.getElementById("mseconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const buttons = document.querySelectorAll("button");

let hoursCount = 0;
let minutesCount = 0;
let secondsCount = 0;
let msecondsCount = 0;
let startId;
let msecondsId;

start.addEventListener("click", (e) => {
  if (!start.className) {
    removeActiveClass();
    addMseconds();
    e.currentTarget.classList.add("active");
    startId = setInterval(() => {
      if (secondsCount === 60) {
        minutesCount++;
        secondsCount %= 60;
      }
      if (minutesCount === 60) {
        hoursCount++;
        minutesCount %= 60;
      }
      updateAll();
    }, 1000);
  }
});
function addMseconds() {
  msecondsId = setInterval(() => {
    msecondsCount = msecondsCount + 1;
    if (msecondsCount === 60) {
      secondsCount++;
      msecondsCount = 0;
      update(seconds, secondsCount);
    }
    update(mseconds, msecondsCount);
  }, 16);
}
window.addEventListener("keypress", () => {
  start.click();
});
stop.addEventListener("click", (e) => {
  clearInterval(startId);
  clearInterval(msecondsId);
  removeActiveClass();
  e.currentTarget.classList.add("active");
});
reset.addEventListener("click", () => {
  //   location.reload();
  hoursCount = 0;
  minutesCount = 0;
  secondsCount = 0;
  msecondsCount = 0;
  stop.click();
  stop.classList.remove("active");
  updateAll();
});

function removeActiveClass() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
}
function update(time, timeCount) {
  time.textContent = timeCount < 10 ? `0${timeCount}` : timeCount;
}
function updateAll() {
  update(seconds, secondsCount);
  update(minutes, minutesCount);
  update(hours, hoursCount);
  update(mseconds, msecondsCount);
}
