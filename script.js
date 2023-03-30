const circle = document.querySelector(".circle");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const percent = document.querySelector("#percent");
const time = document.querySelector("#time");

const totalSeconds = 86400; // total seconds in a day

function update() {
  const now = new Date();
  const secondsToday = now.getSeconds() + 60 * (now.getMinutes() + 60 * now.getHours());
  const remainingSeconds = totalSeconds - secondsToday;
  const percentage = Math.floor((remainingSeconds / totalSeconds) * 100);
  
  percent.innerHTML = `${percentage}%`;
  time.innerHTML = `(${remainingSeconds} seconds remaining)`;
  
  const degrees = percentage / 100 * 360;
  
  if (percentage <= 50) {
    left.style.transform = `rotate(${degrees}deg)`;
    right.style.transform = `rotate(0deg)`;
    right.classList.remove("color-completed");
    right.classList.add("color-remaining");
  } else {
    left.style.transform = "rotate(180deg)";
    right.style.transform = `rotate(${degrees - 180}deg)`;
    right.classList.remove("color-remaining");
    right.classList.add("color-completed");
  }
}

update();
setInterval(update, 1000);
