import { Module } from '../core/module'
import { cel, qel, setStyle } from '../utils'

export class ClicksModule extends Module {
  #countClick

  #stateCount

  #moduleStyle

  constructor(type, text) {
    super(type, text)
    this.time_count = 3000
    this.#countClick = 0
    this.#stateCount = true
    this.#moduleStyle = []
  }

  #showClick(event) {
    const messageBlock = cel('div')
    messageBlock.textContent = `Total clicks/dblclicks: ${this.#countClick}`
    setStyle(messageBlock, this.#moduleStyle)
  }

  #countClicks(event) {
    if (this.#stateCount) {
      this.#showClick(event)

      this.#countClick += 1
      console.log('countClick:', this.#countClick, 'event.type:', event.type)
    }
  }

  #showResult() {}

  trigger() {
    console.log('start')

    document.body.addEventListener('click', this.#countClicks.bind(this))
    document.body.addEventListener('dblclick', this.#countClicks.bind(this))

    setTimeout(() => {
      this.#stateCount = false

      console.log('stop')
      console.log('Total clicks:', this.#countClick)
    }, this.time_count)
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}
