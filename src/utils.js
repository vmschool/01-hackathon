export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function menuPosition(event, menu) {
  let menuWidth = menu.offsetWidth + 4;
  let menuHeight = menu.offsetHeight + 4;
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  if (windowWidth - event.clientX < menuWidth) {
    menu.style.left = `${windowWidth - menuWidth}px`;
  } else {
    menu.style.left = `${event.clientX}px`;
  }
  if (windowHeight - event.clientY < menuHeight) {
    menu.style.top = `${windowHeight - menuHeight}px`;
  } else {
    menu.style.top = `${event.clientY}px`;
  }
}
