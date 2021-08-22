export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  return '#' + Math.floor(Math.random() * parseInt('ffffff', 16)).toString(16)
}