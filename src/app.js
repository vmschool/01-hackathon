import './styles.css'
import {ContextMenu} from './menu'
import {ClicksModule} from './modules/clicks.module'
import {ShapeModule} from './modules/shape.module'
import {TimerModule} from './modules/timer.module'
import {SoundModule} from './modules/sound.module'
import {BackgroundModule} from './modules/background.module'
import {MessageModule} from './modules/message.module'
import { ColorsModule } from './modules/colors.module'
import {BlocksModule} from './modules/blocks.module'

const contextMenu = new ContextMenu('#menu')

// const clicksModule = new ClicksModule('clicks', 'Считать клики (за 3 секунды)')
// const shapeModule = new ShapeModule('shape', 'Создать фигуру')
// const timerModule = new TimerModule('timer', 'Таймер отсчета')
// const soundModule = new SoundModule('sound', 'Случайный звук')
// const backgroundModule = new BackgroundModule('background', 'Поменять цвет')
// const messageModule = new MessageModule('message', 'Кастомное сообщение')
// const colorsModule = new ColorsModule('colors', 'Набор случайных цветов')

contextMenu.add(new ClicksModule())
contextMenu.add(new ShapeModule())
contextMenu.add(new TimerModule())
contextMenu.add(new SoundModule())
contextMenu.add(new BackgroundModule())
contextMenu.add(new MessageModule())
contextMenu.add(new ColorsModule())
contextMenu.add(new BlocksModule())
