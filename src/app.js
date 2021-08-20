import './styles.css'
import { ContextMenu } from './menu';
import BackgroundModule from "./modules/background.module";
import ClicksModule from "./modules/clicks.module";
import ShapeModule from "./modules/shape.module";

// инициализация меню
const menuSelector = document.querySelector('#menu');
// TODO: точно ли этот селектор передаем?
const contextMenu = new ContextMenu(menuSelector);

// инициализация модулей (тип и текст договориться с названиями)
const backgroundModule = new BackgroundModule('backgroundModule', 'Change background colour');
const clicksModule = new ClicksModule('clicksModule', 'Count clicks in interval time');
const shapeModule = new ShapeModule('shapeModule', 'Generates random shape');

// передача модулей в контекстное меню
contextMenu.add(backgroundModule);
contextMenu.add(clicksModule);
contextMenu.add(shapeModule);

