import './styles.css'
import { ContextMenu } from './menu'
import { ShapeModule } from './modules/shape.module'

const shapeModule = new ShapeModule('shape', 'Создать фигуру')

const menu = new ContextMenu('#menu', [
  shapeModule
])
menu.render()
