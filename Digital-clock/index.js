const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("second");
const ampmElement = document.getElementById("ampm");

function updClock() {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let ampm = "AM";

  if (hr > 12) {
    hr = hr - 12;
    ampm = "PM";
  }

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = hr < 10 ? "0" + sec : sec;

  hourElement.innerText = hr;
  minuteElement.innerText = min;
  secondElement.innerText = sec;
  ampmElement, (innerText = ampm);
  setTimeout(() => {
    updClock();
  }, 1000);
}
updClock();
