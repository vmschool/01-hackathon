export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export const cel = (el) => document.createElement(el)
export const qel = (selector) => document.querySelector(selector)
export const setStyle = (el, styles) => {
  for (let st in styles) {
    el.style[st] = styles[st]
  }
}

/* крайние правые и крайние нижние позиции мыши еще некоррктно вычисляются. нужна поправка */

export function xyPopup(event) {
  const { width, height } = document.body.getBoundingClientRect()
  const delta = 58 / 2
  const pageX = event.pageX
  const pageY = event.pageY
  let left
  let top

  if (pageX < delta) {
    left = 0
  } else if (pageX + delta > width) {
    left = width - 58 - 4
  } else {
    left = event.pageX + delta
  }
  if (pageY < delta) {
    top = 0
  } else if (pageY + delta > height) {
    top = height - 58 - 4
  } else {
    top = event.pageY + delta
  }

  return { left: left, top: top }
}
