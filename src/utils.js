// variables
export let counter = -1;
export const timer = 3;

// functions
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function counterIncrement() {
  counter++;
}

export function refreshCounter() {
  counter = -1;
}

export function addObjectToArea(object) {
  const area = document.querySelector('#area');
  area.append(object);
  setTimeout(() => {
    object.remove();
  }, 3000);
}

export function createArea() {
  const area = document.createElement('div')
  area.classList.add('area')
  area.id = 'area'
  document.body.append(area)
}

export function getRandomColor() {
  let hex = [];
  for (let i = 0; i < 3; i++) {
    let r = getRandomHex().toString(16);
    if (r < 10) {
      r = "0" + r;
    }
    hex.push(r);
  }
  const r = "#" + hex.join("");
  return r;
}

function getRandomHex() {
  return Math.floor(Math.random() * 255);
}

