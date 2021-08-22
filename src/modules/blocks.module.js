import {Module} from '../core/module'
import {random, playSound, getRandomColor} from '../utils'
import soundWhoosh from '../assets/whoosh.mp3'

export class BlocksModule extends Module {
  constructor(type = 'blocks', text = 'Множество прямоугольников') {
    super(type, text)
  }

  trigger() {
    const timer = setInterval(this.#showFigure.bind(this), 150)
    setTimeout(async () => clearInterval(timer), 4000)
  }

  #showFigure() {
    const body = document.body.getBoundingClientRect()
    const dimension = Math.min(body.height, body.width)
    const size = random(dimension * 0.1, dimension * 0.5)
    this.#renderFigure(size, body)
    playSound(soundWhoosh)
  }

  #renderFigure(size, body) {
    const figure$ = document.createElement('div')
    this.#styleFigure(figure$, size, body, getRandomColor())

    document.body.append(figure$)

    setTimeout(() => figure$.remove(), 3000)
  }

  #styleFigure(figure$, size, body, color) {
    figure$.style.position = 'absolute'
    figure$.style.top = random(0, body.height - size) + 'px'
    figure$.style.left = random(0, body.height - size) + 'px'
    figure$.style.width = size + 'px'
    figure$.style.height = size + 'px'
    figure$.style.backgroundColor = color
    figure$.style.opacity = '0.5'
    figure$.style.borderRadius = '5%'
  }
}
