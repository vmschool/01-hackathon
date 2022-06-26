export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomColor() {
  const colors = [
    "skyblue",
    "yellow",
    "green",
    "#c1c1c1",
    "orange",
    "lime",
    "aqua",
    "fuchsia",
  ];
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
