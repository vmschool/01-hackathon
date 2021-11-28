export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export const allIntervals = [];
export function clearAllIntervals() {
  allIntervals.forEach(clearInterval);
}

//рандомный цвет
export function randomColor () {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[random(0, letters.length - 1)]; 
  }
  
  return color;
}

export const DOCUMENT_WIDTH = () => document.documentElement.clientWidth;
export const DOCUMENT_HEIGHT = () =>  window.innerHeight;
export const MENU = document.querySelector('#menu');