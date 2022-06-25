import './styles.css'
import { ShapeModule } from './modules/shape.module'
import { ContextMenu } from './menu'

const shapeModule = new ShapeModule('shape', 'Создать фигуру')

const menu = new ContextMenu('#menu', [
  shapeModule
])
menu.render()
