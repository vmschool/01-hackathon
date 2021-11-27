import { Module } from '../core/module'

export class ClicksModule extends Module {
  time //кол-во секунд, отведённых для подсчёта
  clicks //количество нажатий
  timer //таймер обратного отсчёта
  body //вся область страницы
  running //запущен ли сейчас слушатель нажатий
  listener //функция-обработчик событий
  static TYPE = 'ClickModule'
  static TEXT = 'Считать клики (за 3 секунды)'
  constructor() {
    super(ClicksModule.TYPE, ClicksModule.TEXT)
    this.time = 3 //количество отведённых секунд
    this.clicks = 0
    this.body = document.querySelector('body')
    this.running = false

    this.listener = () => {
      if (this.running) {
        this.clicks++
      }
    }
  }
  start() {
    this.clicks = 0 //обнуляем счётчик
    this.running = true
    let curretntTime = this.time //текущее количество секунд
    this.body.addEventListener('click', this.listener) //запускаем слушатель
    //запуск обратного отсчёта
    this.timer = setInterval(() => {
      if (curretntTime === 0) {
        this.finish()
      } else {
        curretntTime-- //после 1 секунды уменьшаем оставшееся время на 1
      }
    }, 1000)
  }

  finish() {
    clearInterval(this.timer) //останавливаем таймер
    this.running = false //остановка подсчётов
    this.body.removeEventListener('click', this.listener) //удаление обработчика
    this.toHTML() //вывод сообщения
  }

  trigger() {
    this.start() //запуск посчёта кликов
  }

  toHTML() {
    //вывод сообщения пользователю
    alert(`За ${this.time} секунды было сделано ${this.clicks} кликов`)
  }
}
