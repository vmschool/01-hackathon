import { Module } from '../core/module'

export class ClicksModule extends Module {
  constructor(type, text, time_count) {
    super(type, text)
    this.time_count = time_count

  }

  trigger() {
    console.log('start')

    function countClicks() {
      countClick += 1
      console.log('countClick:', countClick)
    }

    let countClick = 0

    document.body.addEventListener('click', countClicks)
    document.body.addEventListener('dblclick', countClicks)

    setTimeout(() => {
      document.body.removeEventListener('click', countClicks)
      document.body.removeEventListener('dblclick', countClicks)
      console.log('stop');
    }, this.time_count)

    return countClick
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}
