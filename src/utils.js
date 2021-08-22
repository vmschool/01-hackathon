export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  let r = `${(Math.floor(Math.random() * 256) + 1).toString(16).toUpperCase()}`
  if (r.length === 1) r = `0${r}`
  let g = (Math.floor(Math.random() * 256) + 1).toString(16).toUpperCase()
  if (g.length === 1) g = `0${g}`
  let b = (Math.floor(Math.random() * 256) + 1).toString(16).toUpperCase()
  if (b.length === 1) b = `0${b}`

  return `#${r}${g}${b}`
}

export const cel = (el) => document.createElement(el)
export const qel = (selector) => document.querySelector(selector)
export const setStyle = (el, styles) => {
  for (let st in styles) {
    el.style[st] = styles[st]
  }
}

/* крайние правые и крайние нижние позиции мыши еще некоррктно вычисляются. нужна поправка */

export function xyTooltips(event) {
  const { width, height } = document.body.getBoundingClientRect()
  const delta = 58 / 2
  const pageX = event.pageX
  const pageY = event.pageY
  let left
  let top

  if (pageX < delta) {
    left = 0
  } else if (pageX + delta > width) {
    left = width - 58
  } else if (width - pageX < 58) {
    left = width - 58
  } else {
    left = pageX - delta
  }

  if (pageY < delta) {
    top = 0
  } else if (pageY + delta > height) {
    top = height - 58
  } else if (height - pageY < 58) {
    top = height - 58
  } else {
    top = pageY - delta
  }

  return { left: left, top: top }
}
