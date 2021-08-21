export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  let r = `${(Math.floor(Math.random() * 256) + 1).toString(16).toUpperCase()}`
  if (r.length === 1) r = `0${r}`;
  let g = (Math.floor(Math.random() * 256) + 1).toString(16).toUpperCase()
  if (g.length === 1) g = `0${g}`;
  let b = (Math.floor(Math.random() * 256) + 1).toString(16).toUpperCase()
  if (b.length === 1) b = `0${b}`;

  return `#${r}${g}${b}`;
}

export const cel = el => document.createElement(el)
export const qel = selector => document.querySelector(selector)
export const setStyle = (el, styles) => {
  for (let st in styles) {
    el.style[st] = styles[st]
  }
}