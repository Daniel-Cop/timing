function watch() {
  let now = new Date();

  let secs = now.getSeconds();
  let secsDeg = secs * 6;

  let mins = now.getMinutes();
  let minsDeg = mins * 6 + secs * 0.1;

  let hours = now.getHours();
  let hoursDeg = hours * 30 + mins * 0.5;

  document.getElementById("sec").style.transform = `rotate(${secsDeg}deg)`;
  document.getElementById("min").style.transform = `rotate(${minsDeg}deg)`;
  document.getElementById("hrs").style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(watch(), 50);

setInterval(() => {
  watch();
}, 1000);
