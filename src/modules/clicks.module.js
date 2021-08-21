import { Module } from '../core/module'
import { cel, qel } from '../utils'
import { xyPopup } from '../utils'

export class ClicksModule extends Module {
  #countClick

  #stateCount

  constructor(type, text) {
    super(type, text)
    this.#countClick = 0
    this.#stateCount = true
    this.time_count = 5000
  }

  #showClick(event) {
    const { top, left } = xyPopup(event)
    const messagePopup = cel('div')

    messagePopup.textContent = `${event.type}`
    messagePopup.classList.add('message-popup')
    messagePopup.style.top = `${top}px`
    messagePopup.style.left = `${left}px`
    document.body.append(messagePopup)

    setTimeout(() => {
      qel('.message-popup').classList.add('hidden-block')
    }, 800)

    setTimeout(() => {
      qel('.message-popup').remove()
    }, 890)
  }

  #countClicks(event) {
    if (this.#stateCount) {
      this.#showClick(event)
      this.#countClick += 1
    }
  }

  #showResult() {
    const wrapper = cel('div')
    wrapper.className = 'wrapper'

    const messageBlock = cel('div')
    messageBlock.textContent = this.#countClick
      ? `Total clicks/dblclicks: ${this.#countClick}`
      : 'no clicks'
    messageBlock.className = 'message-block'

    wrapper.append(messageBlock)
    document.body.append(wrapper)

    setTimeout(() => {
      qel('.wrapper').classList.add('hidden-block')
    }, 4000)

    setTimeout(() => {
      qel('.wrapper').remove()
    }, 4900)
  }

  trigger() {
    document.body.addEventListener('click', this.#countClicks.bind(this))
    document.body.addEventListener('dblclick', this.#countClicks.bind(this))

    setTimeout(() => {
      this.#stateCount = false
      this.#showResult()
    }, this.time_count)
  }
}
