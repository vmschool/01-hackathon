import './styles.css'
import { ContextMenu } from './menu'
import { ShapeModule } from './modules/shape.module'
import { RandomWords } from './modules/text.module'
import { TimerModule } from './modules/timer.module'

const shapeModule = new ShapeModule('shape', 'Создать фигуру')
const randomWords = new RandomWords('random', 'Кастомное сообщение')
const timerModule = new TimerModule('timer', 'Таймер')

const menu = new ContextMenu('#menu', [
  shapeModule,
  randomWords,
  timerModule
])
menu.render()
