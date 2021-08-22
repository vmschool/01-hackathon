import { Module } from '../core/module'
import '../css/clicks.css'

export class ClicksModule extends Module {
  #timeInterval
  #countClick
  #stateCount
  #moduleIsWorking
  #timer

  constructor(type = 'clicks', text = 'Считать клики (за 3 секунды)', timeInterval = 4000) {
    if (timeInterval !== 3000) {
      text = `Считать клики (за ${Math.round(timeInterval / 1000)} сек.)`
    }
    super(type, text)
    this.#countClick = 0
    this.#timeInterval = timeInterval
    this.#moduleIsWorking = true

    document.body.addEventListener('click', this.#countClicks.bind(this))
    document.body.addEventListener('dblclick', this.#countDblclick.bind(this))
  }

  trigger() {
    if (this.#moduleIsWorking) {
      this.#moduleIsWorking = false
      this.#stateCount = true
      this.#countClick = 0

      setTimeout(() => {
        this.#moduleIsWorking = true
        this.#stateCount = false
        this.#showResult()
      }, this.#timeInterval)
    }
  }

  #showResult() {
    const wrapper$ = document.createElement('div')
    wrapper$.className = 'wrapper'

    const messageBlock = document.createElement('div')
    messageBlock.textContent = this.#countClick
      ? `Total clicks/dblclicks: ${this.#countClick}`
      : 'no clicks'
    messageBlock.className = 'message-block'

    wrapper$.append(messageBlock)
    document.body.append(wrapper$)

    this.#hideElement(wrapper$, 800, 1300)
  }

  #countClicks(event) {
    if (event.detail === 1) {
      this.#timer = setTimeout(() => {
        if (this.#stateCount && event.target === document.body) {
          this.#showClick(event)
          this.#countClick++
        }
      }, 200)
    }
  }

  #countDblclick(event) {
    clearTimeout(this.#timer)

    if (this.#stateCount && event.target === document.body) {
      this.#showClick(event)
      this.#countClick++
    }
  }

  #showClick(event) {
    const { top, left } = this.#calculateCoordinates(event)
    const messagePopup$ = document.createElement('div')

    messagePopup$.textContent = event.type
    messagePopup$.classList.add('message-popup')
    messagePopup$.style.top = top + 'px'
    messagePopup$.style.left = left + 'px'
    document.body.append(messagePopup$)

    this.#hideElement(messagePopup$, 800, 1300)
  }

  #hideElement(element$, hideTimeout, removeTimeout) {
    setTimeout(() => {
      element$.classList.add('hidden-block')
    }, hideTimeout)

    setTimeout(() => {
      element$.remove()
    }, removeTimeout)
  }

  #calculateCoordinates({ pageX: clickX, pageY: clickY }) {
    const body = document.body.getBoundingClientRect()
    const clickSize = 58
    const delta = clickSize / 2

    let left = Math.max(0, clickX - delta)
    left = Math.min(left, clickX + clickSize, body.width - clickSize)

    let top = Math.max(0, clickY - delta)
    top = Math.min(top, clickY + clickSize, body.height - clickSize)

    return { left: left, top: top }
  }
}
