import {Module} from '../core/module'

export class PrintModule extends Module {
  static TYPE = 'PrintModule'
  static TEXT = 'Печать страницы'
  constructor() {
    super(PrintModule.TYPE, PrintModule.TEXT)
  }

  createInfoMessage() {
    const ourMessage = document.createElement('div')
    ourMessage.textContent = '{ Данная функция нужна для людей пожилого возраста }'
    ourMessage.style.fontSize = 'x-large'
    ourMessage.style.width = '100%'
    ourMessage.style.textAlign = 'center'
    ourMessage.style.marginTop = '3rem'
    return ourMessage
  }

  displayInfoMessage() {
    if (!document.body.ourMessage) {
      document.body.append(this.createInfoMessage())
    }
  }

  trigger() {
    this.displayInfoMessage()
    window.print()
  }
}