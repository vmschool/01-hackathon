export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  const r = random(0, 16).toString(16).toUpperCase()
  const g = random(0, 16).toString(16).toUpperCase()
  const b = random(0, 16).toString(16).toUpperCase()

  return `#${r}${g}${b}`
}

export function playSound(sound) {
  const audio = new Audio(sound)
  audio.play()
}
