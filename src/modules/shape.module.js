import { Module } from '../core/module'
import * as utils from '../utils'

export class ShapeModule extends Module {
  #pageWidth
  #pageHeight

  constructor(type = 'shape', text = 'Случайная фигура') {
    super(type, text)
  }

  #getSizeWindow() {
    this.#pageWidth = document.documentElement.clientWidth
    this.#pageHeight = document.documentElement.clientHeight
  }

  trigger() {
    const QUANTITY_FIGURE = 4
    const figure = utils.random(1, QUANTITY_FIGURE)

    this.#getSizeWindow()
    const div = document.createElement('div')
    const size = utils.random(30, 200)

    div.style.position = 'absolute'
    div.style.top = utils.random(size, this.#pageHeight - size) + 'px'
    div.style.left = utils.random(size, this.#pageWidth - size) + 'px'

    switch (figure) {
      // прямоугольник
      case 1:
        div.style.width = `${size}px`
        div.style.height = `${size}px`
        div.style.backgroundColor = utils.getRandomColor()
        break
      // круг
      case 2:
        div.style.borderRadius = '50%'
        div.style.backgroundColor = utils.getRandomColor()
        div.style.width = `${size}px`
        div.style.height = `${size}px`
        break
      // треугольник
      case 3:
        div.style.borderLeft = '50px solid transparent'
        div.style.borderRight = '50px solid transparent'
        div.style.borderBottom = `${size}px solid ${utils.getRandomColor()}`
        div.style.width = '0px'
        div.style.height = '0px'
        break
      // трапеция
      case 4:
        div.style.width = `${size}px`
        div.style.borderLeft = '50px solid transparent'
        div.style.borderRight = '50px solid transparent'
        div.style.borderBottom = `${size}px solid ${utils.getRandomColor()}`
    }
    document.body.append(div)

    setTimeout(() => {
      div.remove()
    }, 3000)
  }
}
