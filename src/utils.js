export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function randomColor() {
  const colors = ['#5776b9', '#d9051b', '#ffdb03', '#42a60b', '#fee610', '#fc614d', '#63bb43', '#71a9d8'];
  const index = random(0, colors.length);
  return colors[index];
}

export function addZero(number) {
  if (number < 10) {
    number = `0${number}`;
  }
  return number;
}

export function addEventContainer() {
  const eventContainer = document.createElement('div');
  eventContainer.className = 'event-container';
  document.body.append(eventContainer);
}

export function clearEventContainer() {
  const eventContainer = document.querySelector('.event-container');
  if (eventContainer) {
    eventContainer.remove();
  }
}