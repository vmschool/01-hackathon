import {Module} from '../core/module'
import { getRandomColor, random } from '../utils'

export class ShapeModule extends Module {
  #shapeElement
  constructor(type, text) {
    super(type, text)
    this.#shapeElement = document.createElement('div')
  }

  trigger() {
    document.body.append(this.#shapeElement)

    const shapeHeight = random(50, 300)
    const shapeWidth = random(50, 300)
    
    this.#shapeElement.style.height = shapeHeight + 'px'
    this.#shapeElement.style.width = shapeWidth + 'px'
    this.#shapeElement.style.background = getRandomColor()
    this.#shapeElement.style.borderRadius = random(0, 100) + '%'
    this.#shapeElement.style.position = 'absolute'
    this.#shapeElement.style.top = random(0, (document.documentElement.clientHeight - shapeHeight)) + 'px'
    this.#shapeElement.style.left = random(0, (document.documentElement.clientWidth - shapeWidth)) + 'px'

    const timer = setTimeout(() => {
      this.#shapeElement.remove()
      clearTimeout(timer)
    }, 2500)
  }
}
