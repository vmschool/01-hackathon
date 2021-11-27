import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
// import { ClicksModule } from "./modules/clicks.module";
// import { ShapeModule } from "./modules/shape.module";
import { GameOfLife } from "./modules/gol";
import { RandomSound } from "./modules/randomSound.module";

// Инициализируем ContextMenu
const contextMenu = new ContextMenu("#menu");
// const container = document.querySelector(".module-container");

// добавляем слушатели для вызова контекстного меню и его закрытия
document.body.addEventListener("contextmenu", (event) => {
  contextMenu.open(event);
});
document.body.addEventListener("click", (event) => {
  contextMenu.close(event);
});

const gameOfLife = new GameOfLife("Game of Life", "Let's watch and relax!");
const bgModule = new BackgroundModule(
  "Background",
  "Generate random background"
);
const randomSound = new RandomSound("Sounds", "Random Sounds");
// const clicksModule = new ClicksModule("Clicks", "Generate clicks");
// const shapeModule = new ShapeModule("Shapes", "Generate shapes");

// добавляем модуль в контекстное меню
contextMenu.add(gameOfLife);
contextMenu.add(bgModule);
// contextMenu.add(clicksModule);
// contextMenu.add(shapeModule);
contextMenu.add(randomSound);
