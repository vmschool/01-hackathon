export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function randomOpenConextMenu() {
  document.body.addEventListener('contextmenu', event => {
    event.preventDefault();
    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
    menu.classList.add('open');
  })
}

export function createItemsContextMenu(menuItem, name) {
  const menu = document.querySelector('.menu');

  const item = document.createElement('li');
  item.classList.add('menu-item');
  item.textContent = name;
  item.id = menuItem;
  menu.append(item);

}

export function closeContextMenu() {
  document.body.addEventListener('click', event => {
    menu.classList.remove('open');
  }, false)
}
  
export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}