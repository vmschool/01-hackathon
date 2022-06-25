export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomStringRGB() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

export function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

export function moveAndResizeElement(element, top, left, height = 0, width = 0) {
  const { style } = element;
  style.height = `${height}px`;
  style.width = `${width}px`;

  style.top = `${top - height / 2}px`;
  style.left = `${left - width / 2}px`;
}

export function moveElement(element, top, left) {
  const { style } = element;
  style.top = `${top}px`;
  style.left = `${left}px`;
}
