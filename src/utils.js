export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function getPosition(e) {
  let posx = 0;
  let posy = 0;

  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return {
    x: posx,
    y: posy,
  };
}

let menuWidth = menu.offsetWidth;
let menuHeight = menu.offsetHeight;

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

export function positionMenu(e) {
  let clickCoords = getPosition(e);
  let clickCoordsX = clickCoords.x;
  let clickCoordsY = clickCoords.y;

  menuWidth = menu.offsetWidth + 4;
  menuHeight = menu.offsetHeight + 4;

  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  if (windowWidth - clickCoordsX < menuWidth) {
    menu.style.left = windowWidth - menuWidth + 'px';
  } else {
    menu.style.left = clickCoordsX + 'px';
  }

  if (windowHeight - clickCoordsY < menuHeight) {
    menu.style.top = windowHeight - menuHeight + 'px';
  } else {
    menu.style.top = clickCoordsY + 'px';
  }
}