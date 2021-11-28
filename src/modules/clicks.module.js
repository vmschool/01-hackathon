import { Module } from '../core/module'

export class ClicksModule extends Module {
  #clicks //количество нажатий
  #timer //таймер обратного отсчёта

  #running //запущен ли сейчас слушатель нажатий
  #listener //функция-обработчик событий
  static TYPE = 'ClickModule'
  static TEXT = 'Считать клики (за 3 секунды)'
  counterDiv //отображение блока счётчика кликов
  constructor() {
    super(ClicksModule.TYPE, ClicksModule.TEXT)
    this.#clicks = 0

    //стили для body
    document.body.style.display = 'flex'
    document.body.style.alignItems = 'flex-end'
    document.body.style.justifyContent = 'center'

    this.running = false

    //стили для блока кликов
    this.counterDiv = document.createElement('div')
    this.counterDiv.classList.add('blockCounter')
    this.counterDiv.style.color = 'blue'
    this.counterDiv.style.backgroundColor = 'coral'
    this.counterDiv.style.fontSize = '2rem'
    this.counterDiv.style.fontWeight = 'bold'

    this.#listener = () => {
      if (this.#running) {
        this.#clicks++
        this.counterDiv.textContent = `Сделано кликов: ${this.#clicks}`
      }
    }
  }
  finish() {
    clearInterval(this.#timer) //останавливаем таймер
    this.#running = false //остановка подсчётов
    document.body.removeEventListener('click', this.#listener) //удаление обработчика
    this.toHTML() //вывод сообщения
  }

  trigger() {
    //запуск посчёта кликов

    this.#clicks = 0 //обнуляем счётчик
    this.#running = true
    const time = 3
    let curretntTime = time //текущее количество секунд
    document.body.addEventListener('click', this.#listener) //запускаем слушатель

    document.body.append(this.counterDiv)

    //запуск обратного отсчёта
    this.timer = setInterval(() => {
      if (curretntTime === 0) {
        this.finish()
      } else {
        curretntTime-- //после 1 секунды уменьшаем оставшееся время на 1
      }
    }, 1000)
  }

  toHTML() {
    //вывод сообщения пользователю
    alert(`За 3 секунды было сделано ${this.#clicks} кликов`)
    document.body.removeChild(this.counterDiv)
  }
}
