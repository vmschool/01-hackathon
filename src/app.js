import './styles.css'
import { ContextMenu } from './menu'
import { ShapeModule } from './modules/shape.module'
import { RandomWords } from './modules/text.module'
import { TimeModule } from './modules/time.module'

const shapeModule = new ShapeModule('shape', 'Создать фигуру')
const randomWords = new RandomWords('random', 'Кастомное сообщение')
const timeModule = new TimeModule('time', 'Время до Нового Года!')

const menu = new ContextMenu('#menu', [
  shapeModule,
  randomWords,
  timeModule
])
menu.render()
