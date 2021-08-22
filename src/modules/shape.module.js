import { Module } from '../core/module'
import { random, getRandomColor } from '../utils'

export class ShapeModule extends Module {
  constructor(type = 'shape', text = 'Случайная фигура') {
    super(type, text)
  }
  
  trigger() {
    const shape = document.createElement('div')
    const { width, height } = document.body.getBoundingClientRect()
    shape.className = 'shape active'

    const widthShape = random(50, 300)
    const heightShape = random(50, 300)
    const radiusTopLeft = random(0, 100)
    const radiusTopRight = random(0, 100)
    const radiusBottomLeft = random(0, 100)
    const radiusBottomRight = random(0, 100)

    let x = random(0, width)
    if (x + widthShape > width) x = width - widthShape

    let y = random(0, height)
    if (y + heightShape > height) y = height - heightShape

    shape.style.left = `${x}px`
    shape.style.top = `${y}px`

    shape.style.background = getRandomColor()
    shape.style.width = `${widthShape}px`
    shape.style.height = `${heightShape}px`
    shape.style.borderTopLeftRadius = `${radiusTopLeft}px`
    shape.style.borderTopRightRadius = `${radiusTopRight}px`
    shape.style.borderBottomLeftRadius = `${radiusBottomLeft}px`
    shape.style.borderBottomRightRadius = `${radiusBottomRight}px`

    document.body.append(shape)

    const shapeEl = document.querySelector(`.shape.active`)
    shapeEl.classList.remove('active')
  
    setTimeout(() => {
      shapeEl.remove()
    }, 3000)
  }
}

const sh = new ShapeModule('1', '2')
document.body.addEventListener('click', () => {
  sh.trigger()
})