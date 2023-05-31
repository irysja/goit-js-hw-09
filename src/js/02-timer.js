const startButton = document.querySelector('button[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

let countdownIntervalId = null;

function startCountdown() {
  const endDate = document.getElementById('datetime-picker').value;
  const targetDate = new Date(endDate).getTime();

  startButton.disabled = true;
  document.getElementById('datetime-picker').disabled = true;

  countdownIntervalId = setInterval(() => {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      daysValue.textContent = formatTimeValue(days);
      hoursValue.textContent = formatTimeValue(hours);
      minutesValue.textContent = formatTimeValue(minutes);
      secondsValue.textContent = formatTimeValue(seconds);

      if (timeDifference <= 0) {
        clearInterval(countdownIntervalId);
      }
    } else {
      clearInterval(countdownIntervalId);
    }
  }, 1000);
}

function formatTimeValue(value) {
  return String(value).padStart(2, '0');
}

startButton.addEventListener('click', startCountdown);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      window.alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);
