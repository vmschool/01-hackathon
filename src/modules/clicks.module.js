import {Module} from '../core/module'

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.clicksCount = 0
    this.start = false
  }

  trigger () {
    const body = document.body
    body.addEventListener('click', this.listenerCountClicks)
  }

  listenerCountClicks () {
    const TIMER = 2000
    if(this.start) {
      this.clicksCount++
    } else {
      this.start = true
      this.clicksCount = 0
      const clickCounter = setTimeout(() => {
        if (this.start) {
          this.start = false;
          alert(this.clicksCount);
          clearTimeout(clickCounter);
        }
      }, TIMER)
    }
  }
}
