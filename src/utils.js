export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomColor() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";
  for (let i = 0; i <= 5; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  return hexColor;
}

export function randomColorGradient() {
  const hexGradient = `linear-gradient(to right, ${randomColor()}, ${randomColor()})`;
  return hexGradient;
}