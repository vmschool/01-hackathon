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

export const getPosition = (event) => {
  let posX = 0;
  let posY = 0;

  if (!event) {
    event = window.event
  }

  if (event.pageX || event.pageY) {
    posX = event.pageX;
    posY = event.pageY;
  } else if (event.clientX || event.clientY) {
    posX = event.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft;
    posY = event.clientY + document.body.scrollTop +
        document.documentElement.scrollTop;
  }

  return {
    x: posX,
    y: posY
  }
}

