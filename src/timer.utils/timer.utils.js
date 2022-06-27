export function renderTimer() {
  const timerBlock = document.createElement('div');
  timerBlock.className = 'countdown-wrapper';

  const countDownBlock = document.createElement('div');
  countDownBlock.className = 'countdown-timer';

  const daysBlock = document.createElement('div');
  const daysTitle = document.createElement('h2');
  daysBlock.className = 'time';
  daysTitle.className = 'days';
  daysTitle.textContent = '0';
  daysBlock.innerHTML = `<small>Days</small>`;
  daysBlock.prepend(daysTitle);

  const hoursBlock = document.createElement('div');
  const hoursTitle = document.createElement('h2');
  hoursBlock.className = 'time';
  hoursTitle.className = 'hours';
  hoursTitle.textContent = '0';
  hoursBlock.innerHTML = `<small>Hours</small>`;
  hoursBlock.prepend(hoursTitle);

  const minutesBlock = document.createElement('div');
  const minutesTitle = document.createElement('h2');
  minutesBlock.className = 'time';
  minutesTitle.className = 'minutes';
  minutesTitle.textContent = '0';
  minutesBlock.innerHTML = `<small>Minutes</small>`;
  minutesBlock.prepend(minutesTitle);

  const seconndsBlock = document.createElement('div');
  const secondsTitle = document.createElement('h2');
  seconndsBlock.className = 'time';
  secondsTitle.className = 'seconds';
  secondsTitle.textContent = '0';
  seconndsBlock.innerHTML = `<small>Seconds</small>`;
  seconndsBlock.prepend(secondsTitle);

  countDownBlock.append(daysBlock, hoursBlock, minutesBlock, seconndsBlock);
  timerBlock.append(countDownBlock);
  document.querySelector('#area').append(timerBlock);
}

export function getTime() {
  const timerBlock = document.querySelector('.countdown-wrapper');
  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal-window';

  const inputField = document.createElement('div');
  inputField.className = 'input-field';

  const inputFieldSpan = document.createElement('span');
  inputFieldSpan.textContent = 'in seconds';

  const getTimeInput = document.createElement('input');
  getTimeInput.className = 'time-input';
  getTimeInput.type = 'number';
  getTimeInput.value = '0';
  getTimeInput.min = '1';

  const submitButton = document.createElement('button');
  submitButton.className = 'submit-time-button';
  submitButton.tyepe = 'button';
  submitButton.textContent = 'Set Timer';

  inputField.append(getTimeInput, inputFieldSpan);

  modalWindow.append(inputField, submitButton);
  timerBlock.append(modalWindow);
}

export function calcTime(gap) {
  const modal = document.querySelector('.countdown-wrapper');

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const texDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinutes = Math.floor((gap % hour) / minute);
  const textSeconds = Math.floor((gap % minute) / second);

  const days = document.querySelector('.days');
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');

  if (modal) {
    days.textContent = texDay;
    hours.textContent = textHour;
    minutes.textContent = textMinutes;
    seconds.textContent = textSeconds;
  }
}

export function createSpan() {
  const timerSpan = document.createElement('span');
  timerSpan.className = 'timer-span';
  timerSpan.textContent = 'Time is up';

  return timerSpan;
}
