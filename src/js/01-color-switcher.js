const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let intervalId = null;

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function startColorChange() {
  startButton.disabled = true; // Disable the "Start" button
  stopButton.disabled = false; // Enable the "Stop" button
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
  startButton.disabled = false; // Enable the "Start" button
  stopButton.disabled = true; // Disable the "Stop" button
  clearInterval(intervalId);
}

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
