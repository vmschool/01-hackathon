export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
export function render(text) {
  const menu = document.querySelector('#menu');
  const menuItem = document.createElement('div');
  menuItem.textContent = `${text}`;
  menu.append(menuItem);
}
export let counter = 0;
export const menu = document.querySelector('#menu');
export function renderModule (input, text) {

}