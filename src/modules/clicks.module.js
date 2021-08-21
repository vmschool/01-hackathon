import { Module } from '../core/module'
import { cel, qel } from '../utils'
import '../css/clicks.module.css'

export class ClicksModule extends Module {
  #countClick

  #stateCount

  #moduleStyle

  constructor(type, text) {
    super(type, text)
    this.time_count = 3000
    this.#countClick = 0
    this.#stateCount = true
  }

  #showClick(event) {
    console.log(event.target)
    const messagePopup = cel('div')
    messagePopup.textContent = `${event.type}`
    messagePopup.classList.add('message-popup')
    document.body.append(messagePopup)
  }

  #countClicks(event) {
    if (this.#stateCount) {
      this.#showClick(event)

      this.#countClick += 1
      console.log('countClick:', this.#countClick, 'event.type:', event.type)
    }
  }

  #showResult() {
    const messageBlock = cel('div')
    messageBlock.textContent = this.#countClick
      ? `Total clicks/dblclicks: ${this.#countClick}`
      : 'no clicks'

    messageBlock.className = 'message-block'
    document.body.append(messageBlock)

    setTimeout(() => {
      qel('.message-block').remove()
    }, 4000)
  }

  trigger() {
    console.log('start')

    document.body.addEventListener('click', this.#countClicks.bind(this))
    document.body.addEventListener('dblclick', this.#countClicks.bind(this))

    setTimeout(() => {
      this.#stateCount = false
      this.#showResult()
    }, this.time_count)
  }
}
