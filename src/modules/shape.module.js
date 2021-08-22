import {Module} from '../core/module'
import {getRandomColor, random} from '../utils'

const figures = [
  'rectangle',
  'circle',
  'triangle',
  'trapezoid'
]

export class ShapeModule extends Module {
  constructor(type = 'shape', text = 'Случайная фигура') {
    super(type, text)
  }

  trigger() {
    const selectedFigure = figures[random(0, figures.length - 1)]
    this.#renderFigure(selectedFigure)
  }

  #renderFigure(selectedFigure) {
    const figure$ = document.createElement('div')
    const size = random(30, 200)
    const color = getRandomColor()

    this.#styleFigure(selectedFigure, figure$, size, color)

    document.body.append(figure$)

    setTimeout(() => figure$.remove(), 3000)
  }

  #styleFigure(selectedFigure, figure$, size, color) {
    const body = document.body.getBoundingClientRect()

    figure$.style.position = 'absolute'
    figure$.style.top = random(0, body.height - size) + 'px'
    figure$.style.left = random(0, body.width - size) + 'px'

    switch (selectedFigure) {
      case 'rectangle':
        this.#styleRectangle(figure$, size, color)
        break
      case 'circle':
        this.#styleCircle(figure$, size, color)
        break
      case 'triangle':
        this.#styleTriangle(figure$, size, color)
        break
      case 'trapezoid':
        this.#styleTrapezoid(figure$, size, color)
        break
    }
  }

  #styleRectangle(figure$, size, color) {
    figure$.style.width = size + 'px'
    figure$.style.height = size + 'px'
    figure$.style.backgroundColor = color
  }

  #styleCircle(figure$, size, color) {
    figure$.style.borderRadius = '50%'
    figure$.style.width = size + 'px'
    figure$.style.height = size + 'px'
    figure$.style.backgroundColor = color
  }

  #styleTriangle(figure$, size, color) {
    figure$.style.borderLeft = '50px solid transparent'
    figure$.style.borderRight = '50px solid transparent'
    figure$.style.borderBottom = `${size}px solid ${color}`
    figure$.style.width = '0px'
    figure$.style.height = '0px'
  }

  #styleTrapezoid(figure$, size, color) {
    figure$.style.width = size + 'px'
    figure$.style.borderLeft = '50px solid transparent'
    figure$.style.borderRight = '50px solid transparent'
    figure$.style.borderBottom = `${size}px solid ${color}`
  }
}
