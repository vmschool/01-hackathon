import {Module} from '../core/module'

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger () {
    const time = prompt('Введите время для таймера в формате hh.mm.ss')
    const arrNumbersTime = time.split('.').map(Number)

    if (arrNumbersTime.includes(NaN)) {
      alert('Неверный формат данных')
      return
    }

    const divHours = document.getElementById("timer-hours")
    const divMins = document.getElementById("timer-mins")
    const divSecs = document.getElementById("timer-secs")
    let endDate = arrNumbersTime[2] * 1000 + arrNumbersTime[1] * 60 * 1000 + arrNumbersTime[0] * 60 * 60 * 1000

    const timer = setInterval(() => {
      if (endDate >= 0) {
        let hours = Math.floor((endDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let mins = Math.floor((endDate % (1000 * 60 * 60)) / (1000 * 60))
        let secs = Math.floor((endDate % (1000 * 60)) / 1000)

        divHours.innerHTML = ("0"+hours).slice(-2)
        divMins.innerHTML = ("0"+mins).slice(-2)
        divSecs.innerHTML = ("0"+secs).slice(-2)

        endDate = endDate - 1000
      } else {
        alert('Таймер закончил свою работу')
        divHours.innerHTML = ''
        divMins.innerHTML = ''
        divSecs.innerHTML = ''
        clearInterval(timer)
      }
    }, 1000);
  }
}