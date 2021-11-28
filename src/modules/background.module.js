import {Module} from '../core/module'
import {random} from '../utils'

export class BackgroundModule extends Module {
  static TYPE = 'BackgroundModule'
  static TEXT = 'Случайный фон'
  constructor() {
    super(BackgroundModule.TYPE, BackgroundModule.TEXT)
    this.backgroundColors = ['#0d43b8', '#1c9e34',
                             '#0b6880', '#5b00c4',
                             '#8700a8', '#990000',
                             '#00ab6c', '#1a1a1a',
                             '#cd2956', '#3498db',
                             '#e74c3c', '#ff9100']
  }

  getRandomColor() {
    const index = random(0, this.backgroundColors.length - 1)
    return this.backgroundColors[index]
  }

  trigger() {
    document.body.style.background = this.getRandomColor()
    document.body.style.transition = '1s'
  }
}