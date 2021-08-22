import { Module } from '../core/module'
import { cel, qel, xyTooltips } from '../utils'

export class ClicksModule extends Module {
  #countClick

  #stateCount

  constructor(type = 'clicks', text = 'Считать клики (за 3 секунды)') {
    super(type, text)
    this.#countClick = 0
    this.#stateCount = false
    this.time_count = 5000

    document.body.addEventListener('click', this.#countClicks.bind(this))
    document.body.addEventListener('dblclick', this.#countClicks.bind(this))
  }

  #showClick(event) {
    const { top, left } = xyTooltips(event)
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
      if (event.target === document.body) {
        this.#showClick(event)
        this.#countClick += 1
      }
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
    }, 2000)

    setTimeout(() => {
      qel('.wrapper').remove()
    }, 2900)
  }

  trigger() {
    this.#stateCount = true

    setTimeout(() => {
      this.#stateCount = false
      this.#showResult()
      this.#countClick = 0
    }, this.time_count)
  }
}
