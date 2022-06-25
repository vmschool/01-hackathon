import './styles.css'
import { ContextMenu } from './menu'
import { ShapeModule } from './modules/shape.module'
import { RandomWords } from './modules/text.module'
import { SoundModule } from './modules/sound.module'

const shapeModule = new ShapeModule('shape', 'Создать фигуру')
const randomWords = new RandomWords('random', 'Кастомное сообщение')
const soundModule = new SoundModule('sound', 'Случайный звук')

const menu = new ContextMenu('#menu', [
  shapeModule,
  randomWords,
  soundModule
])
menu.render()
