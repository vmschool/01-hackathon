export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomStringRGB() {
  return `rgb(${random(255, 0)}, ${random(255, 0)}, ${random(255, 0)})`;
}
