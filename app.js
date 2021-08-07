console.log("Hello worlds");

var appendseconds = document.querySelector("#seconds");
var appendtens = document.querySelector("#tens");
var appendminutes = document.querySelector("#minutes");
var tens = 00;
var seconds = 00;
var minutes = 00;
console.log(tens);

var start = document.querySelector("#button-start");
var stop = document.querySelector("#button-stop");
var reset = document.querySelector("#button-reset");
var interval;

start.addEventListener("click", () => {
  interval = setInterval(() => {
    console.log("Start");
    tens++;

    if (tens <= 9) {
      appendtens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendtens.innerHTML = tens;
    }
    if (tens > 59) {
      seconds = seconds + 1;
      appendseconds.innerHTML = seconds;
      tens = 0;
    }
    if (seconds <= 9) {
      appendseconds.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
      appendseconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      minutes = minutes + 1;
      appendminutes.innerHTML = minutes;
      seconds = 0;
    }
    if (minutes <= 9) {
      appendminutes.innerHTML = "0" + minutes;
    }
    if (seconds > 9) {
      appendminutes.innerHTML = minutes;
    }
  }, 10);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  seconds.innerHTML = "00";
  tens.innerHTML = "00";
  minutes.innerHTML = "00";
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  appendtens.innerHTML = "00";
  appendseconds.innerHTML = "00";
  appendminutes.innerHTML = "00";
  tens = 0;
  minutes = 0;
  seconds = 0;
});
