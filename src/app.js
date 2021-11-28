import './styles.css';
import { ContextMenu } from './menu';
import { ClicksModule } from "./modules/clicks.module.js";
import { MessageModule } from "./modules/message.modul";
import { BackgroundModule } from "./modules/background.module";
import { FiguresModule } from "./modules/figures.module";
import { GameBreakoutModule } from './modules/gameBreakout.module'; 
import {MENU as menuConatainer} from "./utils";

const contextMenu = new ContextMenu('#menu')

const clic = new ClicksModule("countClicks", "Подсчет кликов");
const message = new MessageModule("randomMessage", "Рандомное сообщение");
const background = new BackgroundModule("randomBg", "Рандомный бэкграунд");
const figures = new FiguresModule("randomFigure", "Рандомная фигура");
const gameBreakout = new GameBreakoutModule("game", "Игра 2d"); 

contextMenu.add(clic)
contextMenu.add(message)
contextMenu.add(background)
contextMenu.add(figures)
contextMenu.add(gameBreakout);

document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  contextMenu.open(event.clientX, event.clientY);
});

menuConatainer.addEventListener("click", (event) => {
  contextMenu.startElementTriger(event.target.dataset.type);
});
