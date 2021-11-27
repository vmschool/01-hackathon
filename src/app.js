import './styles.css'
import { ContextMenu } from './menu'
import { ClicksModule } from "./modules/clicks.module.js";

const contextMenu = new ContextMenu('ul')
const menuConatainer = document.querySelector('#menu')


const clic = new ClicksModule("countClicks", "Подсчет кликов")

contextMenu.add(clic)

document.body.addEventListener('contextmenu', event => {
    event.preventDefault();
    contextMenu.open(event.clientX, event.clientY)
})

menuConatainer.addEventListener('click', event => contextMenu.startElementTriger(event.target.dataset.type))