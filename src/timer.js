const sound = new Howl({
  src: ['https://assets.mixkit.co/sfx/preview/mixkit-classic-short-alarm-993.mp3']
  });

let timer,
  duration = 10,
  counter,
  minutes,
  seconds;
const time = document.getElementById("time");

window.onload = function () {
  counter = duration;
  let minutes = parseInt(counter / 60, 10);
  let seconds = parseInt(counter % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  time.textContent = minutes + ":" + seconds;
};

export function startCounting() {
  timer = setInterval(countDown, 1000);
}

export function stopCounting() {
  window.clearTimeout(timer);
  timer = null;
}

export function resetCounting() {
  stopCounting();
  counter = duration;
  minutes = parseInt(counter / 60, 10);
  seconds = parseInt(counter % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("time").textContent = minutes + ":" + seconds;
}

function countDown() {

  counter = counter - 1;
  minutes = parseInt(counter / 60, 10);
  seconds = parseInt(counter % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  time.textContent = minutes + ":" + seconds;

  window.status = counter;
  if (counter == 0) {
    sound.play();
    clearInterval(timer);
    timer = null;
    counter = duration;
    document.getElementById("time").textContent = counter;
  }
}
