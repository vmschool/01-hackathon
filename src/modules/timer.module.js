import { Module } from '../core/module'

export class TimerModule extends Module {
  constructor() {
    super('timer', 'Создать таймер')
  }
  trigger() {
    const createTimer = () => {
      const mainDiv = document.createElement('div')
      mainDiv.className = 'module'
      const body = document.querySelector('body')
      body.append(mainDiv)
      const paragraph = document.createElement('p')
      paragraph.textContent = 'Введите время в минутах'
      paragraph.style = 'margin-bottom: 8px; font-size: 24px;'
      mainDiv.append(paragraph)
      const div = document.createElement('div')
      mainDiv.append(div)
      const input = document.createElement('input')
      input.style = 'margin-bottom: 8px; margin-left: 40px; font-size: 16px;'
      div.append(input)
      mainDiv.append(div)
      const button = document.createElement('button')
      button.style = 'font-size: 24px; padding: 8px; margin-left: 40px;'
      button.textContent = 'Подтвердить'
      mainDiv.append(button)
      const h1 = document.createElement('h1')
      h1.style = 'margin-left: 60px;'
      h1.textContent = '00:00:00'
      mainDiv.append(h1)

      button.addEventListener('click', function () {
        let valueOfTime = input.value
        let timeMinut = parseInt(valueOfTime) * 60
        let timer = setInterval(function () {
          let seconds = timeMinut % 60
          let minuts = (timeMinut / 60) % 60
          let hours = (timeMinut / 60 / 60) % 60
          let strTimer = `${Math.trunc(hours)}:${Math.trunc(minuts)}:${seconds}`
          h1.textContent = strTimer
          timeMinut--
          if (timeMinut <= 0) {
            clearInterval(timer)
            h1.textContent = 'Время истекло'
          }
        }, 1000)
      })
    }

    const tagModul = document.querySelector('.module')
    !tagModul ? createTimer() : (tagModul.innerHTML = '')
  }
}
