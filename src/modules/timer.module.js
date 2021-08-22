import {Module} from '../core/module'

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.flagTimerWork = false
  }

  trigger () {
    if (this.flagTimerWork)  {
      return
    } else {
      const time = prompt('Введите время для таймера в формате hh.mm.ss (до 23.59.59)')
      const arrNumbersTime = time.split('.').map(Number)

      if (arrNumbersTime.includes(NaN)) {
        alert('Неверный формат данных')
        return
      }
      this.buildTimer()
      const divDays = document.getElementById("timer-days")
      const divHours = document.getElementById("timer-hours")
      const divMins = document.getElementById("timer-mins")
      const divSecs = document.getElementById("timer-secs")
      let endDate = arrNumbersTime[2] * 1000 + arrNumbersTime[1] * 60 * 1000 + arrNumbersTime[0] * 60 * 60 * 1000

      const timer = setInterval(() => {
        if (endDate >= 0) {
          this.flagTimerWork = true
          let days = Math.floor(endDate / (1000 * 60 * 60 * 24))
          let hours = Math.floor((endDate / (1000 * 60 * 60)) % 24)
          let mins = Math.floor((endDate / 1000 / 60) % 60)
          let secs = Math.floor((endDate / 1000) % 60)

          divDays.innerHTML = days > 0 ? (days+'day(s):') : ''
          divHours.innerHTML = ("0"+hours+'hour(s):').slice(-10)
          divMins.innerHTML = ("0"+mins+'min(s):').slice(-9)
          divSecs.innerHTML = ("0"+secs+'sec(s)').slice(-8)

          endDate = endDate - 1000
        } else {
          alert('Таймер закончил свою работу')
          this.destroyElem('timer-container')
          clearInterval(timer)
          this.flagTimerWork = false
        }
      }, 1000);
    }
  }

  buildTimer() {
    const container = document.createElement('div')
    const days = document.createElement('span')
    const hours = document.createElement('span')
    const mins = document.createElement('span')
    const secs = document.createElement('span')
    const timer = document.createDocumentFragment()
    container.id = 'timer-container'
    days.id = 'timer-days'
    hours.id = 'timer-hours'
    mins.id = 'timer-mins'
    secs.id = 'timer-secs'
    container.append(days, hours, mins, secs)
    timer.append(container)
    document.body.append(timer)
  }

  destroyElem (id) {
    let deleteElem = document.getElementById(`${id}`);
    deleteElem.parentNode.removeChild(deleteElem);
  }
}