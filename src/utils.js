export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function createArea() {
  const area = document.createElement('div')
  area.classList.add('area')
  area.id = 'area'
  document.body.append(area)
}
