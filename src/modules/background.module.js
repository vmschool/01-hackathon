import {Module} from '../core/module'
import {getRandomColor} from '../utils'

export class BackgroundModule extends Module {
  constructor(type = 'background', text = 'Поменять цвет') {
    super(type, text)
  }

  trigger() {
    document.body.style.background = ''
    document.body.style.backgroundColor = getRandomColor()
  }
}
