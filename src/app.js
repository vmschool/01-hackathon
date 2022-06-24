import "./styles.css";
import ContextMenu from "./menu";
import { Menu } from "./core/menu";

const headMenu = new Menu("body");
import { ClicksModule } from "./modules/clicks.module";
import "bootstrap/dist/css/bootstrap.css";

const contextMenuItems = [
  "Фон",
  "Отлавливание кликов",
  "Аналитика кликов",
  "Таймер отсчетов",
  "Случайная фигура",
];
const menu = new ContextMenu("body", ".menu", contextMenuItems);
menu.render();
const clicksModule = new ClicksModule(".menu");
clicksModule.render();
