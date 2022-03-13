import './styles.css'
import {ContextMenu} from './menu'
import {BackgroundModule} from './modules/background.module'
import {BackgroundGradientModule} from './modules/background-gradient'
import {ShapeModule} from './modules/shape.module'
import {ClicksModule} from './modules/clicks.module'

const moduleColor = new BackgroundModule();
const moduleGradientColor = new BackgroundGradientModule();
const moduleClick = new ClicksModule();
const moduleShape = new ShapeModule();

const menu = new ContextMenu('#menu');
menu.add(moduleClick, moduleShape, moduleColor, moduleGradientColor);

menu.start();
