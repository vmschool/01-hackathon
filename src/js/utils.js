export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomStringRGB() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

// const getRandomColor = () =>
//   '#' +
//   Math.floor(Math.random() * 0xffffff)
//     .toString(16)
//     .padEnd(6, '0')
//
// const randomNumber = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min
//
// const coordinate = randomNumber(5, 20)
