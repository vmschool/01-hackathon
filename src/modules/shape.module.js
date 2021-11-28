import { Module } from '../core/module'
import { random } from '../utils'

export class ShapeModule extends Module {
  #shapes
  #colorSymbols
  #shapeLife
  #shapeSize

  constructor(type, text) {
    super(type, text)
    this.#shapes = ['square', 'circle', 'rhombus', 'triangle']
    this.#colorSymbols = ['0','1','3','4','5','6','7','8','9','a','b','c','d','e','f']
    this.#shapeLife = 3000
    this.#shapeSize = {
      min: 40,
      max: 170,
    }
  }

  trigger() {
    const randomNum = random(0, this.#shapes.length - 1)
    const shape = this.#createShape(randomNum)
    document.body.append(shape)

    this.#createInterval(shape)
  }

  #createShape(shapeNum) {
    const shape = document.createElement('div')

    const shapeType = this.#shapes[shapeNum]
    shape.className = `shape shape--${shapeType}`

    const shapeSize = random(this.#shapeSize.min, this.#shapeSize.max)
    shape.style.width = `${shapeSize}px`

    const shapeColor = this.#createColor()
    shape.style.backgroundColor = shapeColor

    const coordinates = this.#getСoordinates(shapeSize)
    shape.style.top = `${coordinates.top}px`
    shape.style.left = `${coordinates.left}px`

    return shape
  }

  #createInterval(shape) {
    let time = this.#shapeLife
    const shapeInterval = setInterval(() => {
      if (!time) {
        this.#removeShape(shape)
        clearInterval(shapeInterval)
      }

      let shapeTime = time / 1000
      if (String(shapeTime).length < 2) shapeTime = `${shapeTime}.0`
      shape.setAttribute('data-time', shapeTime)
      if (shape < 0.3) shape.style.opacity = shapeTime

      time -= 100
    },100)
  }

  #removeShape(shape) {
    shape.remove()
  }

  #getСoordinates(shapeSize) {
    const windowWidth = document.documentElement.clientWidth
    const windowHeight = document.documentElement.clientHeight
    const coordinates = {
      top: random(0, windowHeight - shapeSize),
      left: random(0, windowWidth - shapeSize),
    };

    return coordinates
  }

  #createColor() {
    let color = '#'
    for (let i = 1; i <= 6; i++) {
      const symbolNum = random(0, this.#colorSymbols.length - 1)
      color += this.#colorSymbols[symbolNum]
    }

    return color
  }
}