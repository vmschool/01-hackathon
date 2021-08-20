export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function randomImages(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
