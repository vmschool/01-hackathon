export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export const allIntervals = [];
export function clearAllIntervals() {
  allIntervals.forEach(clearInterval);
}

export const DOCUMENT_WIDTH = () => document.documentElement.clientWidth;
export const DOCUMENT_HEIGHT = () =>  window.innerHeight;
export const MENU = document.querySelector('#menu');