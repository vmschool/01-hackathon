import {Module} from '../core/module'
import { getRandomColor, random } from '../utils'

export class TimerModule extends Module {
  #timerElement
  constructor(type, text) {
    super(type, text)
    this.#timerElement = document.createElement('div')
  }

  trigger() {
    document.body.append(this.#timerElement)
    this.#timerElement.style.cssText = `
                        width: 270px;
                        height: 75px;
                        padding: 10px;
                       `
    this.#timerElement.innerHTML = `
    Введите количество секунд, через которое этот блок должен исчезнуть и нажмите на кнопку 'Enter'
  <input type="number" style="width: 50px; margin: 0 auto;padding-left: 10px;">
    `
    const inputEl = this.#timerElement.querySelector('input')

    
    this.#timerElement.style.background = getRandomColor()
    this.#timerElement.style.borderRadius = random(0, 20) + 'px'
    this.#timerElement.style.position = 'absolute'
    this.#timerElement.style.top = random(0, (document.documentElement.clientHeight - 75)) + 'px'
    this.#timerElement.style.left = random(0, (document.documentElement.clientWidth - 270)) + 'px'

    inputEl.addEventListener('keyup', (e) => {
      const { key } = e
      if(key === 'Enter'){
        const inputVal = inputEl.value * 1000
        let seconds = inputEl.value
        const interval = setInterval(() => {
          this.#timerElement.style.display = 'flex'
          this.#timerElement.style.justifyContent = 'center'
          this.#timerElement.style.alignItems = 'center'
          

          this.#timerElement.innerHTML = `
            Отлично!<br>
            Этот блок исчезнет через ${seconds} сек.
            `
          if (seconds === 0) {
            clearInterval(interval);
          }        
          seconds--;
        }, 1000);
        const timer = setTimeout(() => {
          this.#timerElement.remove()
          clearTimeout(timer)
        }, inputVal + 1000)        
      }
    })
  }
}