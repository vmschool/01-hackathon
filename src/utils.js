export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function createElement(tag,className, text, time) {
  const element = document.createElement(tag)
  element.className = className
  element.textContent = text
  // id? element.id = id:''
  element.dataset.time = time

  
  return element
  // document.body.append(element)
}