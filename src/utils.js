export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
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