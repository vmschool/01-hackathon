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