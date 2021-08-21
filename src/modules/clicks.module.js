import {Module} from '../core/module'

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger () {
    let clicksCount = 0
    let start = false
    const TIMER = 2000
    const body = document.body

    body.addEventListener('click', () => {
      if(start) {
        clicksCount++
      } else {
        start = true
        clicksCount = 0
        setTimeout(() => {
          if (start) {
            start = false;
            alert(clicksCount);
          }
        }, TIMER)
      }
    })
  }
}