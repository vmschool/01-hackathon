import "./styles.css";
import ContextMenu from "./menu";
import { Menu } from "./core/menu";

const headMenu = new Menu("body");

// const contextMenuItems = [
//   "Аналитика кликов",
//   "Аналитика кликов",
//   "Аналитика кликов",
//   "Таймер отсчетов",
//   "Случайная фигура",
// ];

const contextMenuItems = [
  {name: "Аналитика кликов", id: 1},
  {name: "Случайная фигура", id: 2},
  {name: "Случайный фон", id: 3},
  {name: "Случайный звук", id: 4},
  {name: "Кастомное сообщение", id: 5},
  {name: "Таймер отсчета", id: 6},
];

const menu = new ContextMenu("body", ".menu", contextMenuItems);
menu.render();
