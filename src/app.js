import "./styles.css";
import ContextMenu from "./menu";
import { Module } from "./core/module";
import { ClicksModule } from "./modules/clicks.module";
import "bootstrap/dist/css/bootstrap.css";

const contextMenuItems = [
  { name: "Случайная фигура", id: "1" },
  { name: "Аналитика кликов", id: "2" },
  { name: "Случайный фон", id: "3" },
  { name: "Случайный звук", id: "4" },
  { name: "Кастомное сообщение", id: "5" },
  { name: "Таймер отсчета", id: "6" },
];

contextMenuItems.forEach((item) => {
  const module = new Module(item.id, item.name);
  const element = document.createElement("li");
  element.innerHTML = module.toHTML();
  const menuItem = element.querySelector(".menu-item");
  const menu = document.querySelector(".menu");
  menu.append(menuItem);
});

const menu = new ContextMenu("body", ".menu", contextMenuItems);

const clickItem = contextMenuItems.find((item) => item.id === "2");
const clicksModule = new ClicksModule(".menu", clickItem);
clicksModule.trigger();
