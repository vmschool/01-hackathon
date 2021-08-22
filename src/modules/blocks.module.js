import {Module} from '../core/module'
import {random, playSound, getRandomColor} from '../utils'
import soundWhoosh from '../assets/whoosh.mp3'

export class BlocksModule extends Module {
  #pageWidth
  #pageHeight

  constructor(type = 'blocks', text = 'Множество прямоугольников') {
    super(type, text)
  }

  trigger() {
    const timer = setInterval(this.#showFigure.bind(this), 150)
    setTimeout(async () => clearInterval(timer), 4000)
  }

  #getSizeWindow() {
    this.#pageWidth = document.documentElement.clientWidth
    this.#pageHeight = document.documentElement.clientHeight
  }

  #showFigure() {
    this.#getSizeWindow()
    const dimension = Math.min(this.#pageWidth, this.#pageHeight)
    const size = random(dimension * 0.1, dimension * 0.5)
    this.#renderFigure(size)
    playSound(soundWhoosh)
  }

  #renderFigure(size) {
    const figure$ = document.createElement('div')
    figure$.style.position = 'absolute'
    figure$.style.top = random(0, this.#pageHeight - size) + 'px'
    figure$.style.left = random(0, this.#pageWidth - size) + 'px'
    figure$.style.width = size + 'px'
    figure$.style.height = size + 'px'
    figure$.style.backgroundColor = getRandomColor()
    figure$.style.opacity = '0.5'
    figure$.style.borderRadius = '5%'

    document.body.append(figure$)

    setTimeout(() => figure$.remove(), 3000)
  }
}
