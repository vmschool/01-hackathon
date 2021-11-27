import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";

const menu = new ContextMenu(".menu");
const backgroundModule = new BackgroundModule(
  "background-changer",
  "Поменять цвет фона"
);
const clicksModule = new ClicksModule(
  "clicks-analyzer",
  "Считать клики (за 5 секунд)"
);
const shapeModule = new ShapeModule(
  "random-shape",
  "Создать фигуру"
);
shapeModule.addFigure()
const backgroundModuleHTML = backgroundModule.toHTML();
const clicksModuleHTML = clicksModule.toHTML();
const shapeModuleHTML = shapeModule.toHTML();

menu.add([backgroundModuleHTML, clicksModuleHTML, shapeModuleHTML]);

document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  console.log(event.pageX, event.pageY);
  menu.el.style.top = `${event.pageY}px`;
  menu.el.style.left = `${event.pageX}px`;
  menu.open();
});
