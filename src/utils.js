export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export let counter = -1;
export const timer = 3;
export function counterIncrement() {
  counter++;
}
export function refreshCounter() {
  counter = -1;
}
