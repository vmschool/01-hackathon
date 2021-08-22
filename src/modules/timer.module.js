import {Module} from '../core/module'
import '../css/timer.css'

export class TimerModule extends Module {
  constructor(type = 'timer', text = 'Таймер отсчета') {
    super(type, text)
  }

  trigger() {
    if (document.querySelector('#tmr')) {
      alert('Таймер уже включен!')
      return
    }

    this.wrap$ = document.createElement('div')
    this.wrap$.className = 'wrap'
    this.wrap$.style.left = `${window.innerWidth / 2 - 125}px`
    this.wrap$.id = 'tmr'

    const input$ = document.createElement('input')
    input$.className = 'input'
    input$.type = 'number'
    input$.min = '1'
    input$.value = '1'

    const startBtn$ = document.createElement('button')
    startBtn$.className = 'button'
    startBtn$.textContent = 'Пуск'
    startBtn$.addEventListener('click', () => this.#startTimer(input$))

    const closeBtn$ = document.createElement('button')
    closeBtn$.className = 'button'
    closeBtn$.textContent = 'Закрыть'
    closeBtn$.addEventListener('click', () => this.#closeTimer(this.wrap$))

    this.wrap$.append(input$, startBtn$, closeBtn$)
    document.body.append(this.wrap$)
  }

  #startTimer(input$) {
    let count = parseInt(input$.value)
    this.wrap$.innerHTML = ''
    const counter$ = document.createElement('h1')
    counter$.innerText = `${count}`

    const timeCounter = setInterval(() => {
      if (count >= 0) {
        counter$.innerText = `${count - 1}`
      }

      count--
      if (count === -1) {
        counter$.innerText = 'Время вышло'
      }
      if (count === -5) {
        clearInterval(timeCounter)
        this.#closeTimer(this.wrap$)
      }

    }, 1000)

    this.wrap$.append(counter$)
  }

  #closeTimer(el) {
    el.innerHTML = ''
    el.remove()
  }

}
