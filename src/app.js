import './styles.css';
import { ContextMenu } from './menu';
import { ClicksModule } from "./modules/clicks.module.js";
import { MessageModule } from "./modules/message.modul";
import { BackgroundModule } from "./modules/background.module";
import {MENU as menuConatainer} from "./utils";

const contextMenu = new ContextMenu('#menu')

const clic = new ClicksModule("countClicks", "Подсчет кликов")
const message = new MessageModule("randomMessage", "Рандомное сообщение")
const background = new BackgroundModule("randomBg", "Рандомный бэкграунд");

contextMenu.add(clic)
contextMenu.add(message)
contextMenu.add(background)

document.body.addEventListener('contextmenu', event => {
    event.preventDefault();
    contextMenu.open(event.clientX, event.clientY)
})

menuConatainer.addEventListener('click', event => {
    contextMenu.startElementTriger(event.target.dataset.type)
})
