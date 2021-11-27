import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";

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

// добавляем модуль в контекстное меню
contextMenu.add(bgModule);
