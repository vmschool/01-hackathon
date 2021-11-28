import "./styles.css";
import { ContextMenu } from "./menu";
import { ClicksModule } from "./modules/clicks.module.js";
import { MessageModule } from "./modules/message.modul";
import { BackgroundModule } from "./modules/background.module";
import { GameBreakoutModule } from "./modules/gameBreakout.module";

const contextMenu = new ContextMenu("#menu");
const menuConatainer = document.querySelector("#menu");

const clic = new ClicksModule("countClicks", "Подсчет кликов");
const message = new MessageModule("randomMessage", "Рандомное сообщение");
const background = new BackgroundModule("randomBg", "Рандомный бэкграунд");
const gameBreakout = new GameBreakoutModule(
  "gameBreakout",
  "Сумашедшая игра 😎"
);

contextMenu.add(clic);
contextMenu.add(message);
contextMenu.add(background);
contextMenu.add(gameBreakout);

document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  contextMenu.open(event.clientX, event.clientY);
});

menuConatainer.addEventListener("click", (event) => {
  contextMenu.startElementTriger(event.target.dataset.type);
});
