import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";

// Инициализируем ContextMenu
const contextMenu = new ContextMenu("#menu");

// добавляем слушатели для вызова контекстного меню и его закрытия
document.body.addEventListener("contextmenu", (event) => {
  contextMenu.open(event);
});
document.body.addEventListener("click", (event) => {
  contextMenu.close(event);
});

const bgModule = new BackgroundModule(
  "Background",
  "Generate random background"
);
const clicksModule = new ClicksModule("Clicks", "Generate clicks");
const shapeModule = new ShapeModule("Shapes", "Generate shapes");

// добавляем модуль в контекстное меню
contextMenu.add(bgModule);
contextMenu.add(clicksModule);
contextMenu.add(shapeModule);
