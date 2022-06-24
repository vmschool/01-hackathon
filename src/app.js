import "./styles.css";
import ContextMenu from "./menu";

const contextMenuItems = [
  "Фон",
  "Отлавливание кликов",
  "Аналитика кликов",
  "Таймер отсчетов",
  "Случайная фигура",
];
const menu = new ContextMenu("body", ".menu", contextMenuItems);
menu.render();
