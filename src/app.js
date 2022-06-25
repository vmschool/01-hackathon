import './styles.css'
import { ShapeModule } from './modules/shape.module'

const shapeModule = new ShapeModule('shape', 'Создать фигуру')
shapeModule.trigger()