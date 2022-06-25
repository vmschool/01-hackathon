export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export const getRandomColor = () => {
  const letters = 'ABCDEF1234567890'
  let color = '#'
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }

  return color
}