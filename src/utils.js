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

export function createItemsContextMenu() {
  const menu = document.querySelector('.menu');

  const item = document.createElement('li');
  item.classList.add('menu-item');
  item.textContent = 'Считать клики (за 3 секунды)';
  item.id = '1';
  menu.append(item);

  const item1 = document.createElement('li');
  item1.classList.add('menu-item');
  item1.textContent = 'Создать фигуру';
  item1.id = '2';
  menu.append(item1);

  const item2 = document.createElement('li');
  item2.classList.add('menu-item');
  item2.textContent = 'Поменять цвет';
  item2.id = '3';
  menu.append(item2);

  const item3 = document.createElement('li');
  item3.classList.add('menu-item');
  item3.textContent = 'Вызвать сообщение';
  item3.id = '4';
  menu.append(item3);
}

export function closeContextMenu() {
  document.body.addEventListener('click', event => {
    menu.classList.remove('open');
}, false)
  
export  function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}