import "./styles.css";
import ContextMenu from "./menu";
import { ClicksModule } from "./modules/clicks.module";
import { createArea, createEl } from "./utils";
import { BackgroundModule } from "./modules/background.module";
import { RandomSound } from "./modules/randomSound.module";
import { IsPalindromeModule } from "./modules/palindrome.module";
import { ShapeModule } from "./modules/shape.module";
import CustomMessage from "./modules/customMessage.module";
import { CreateMusicModule } from "./modules/createMusic.module";
import { WeatherModule } from "./modules/weather.module";
import Timer from "./modules/timer.module";
import { showHelpComponent } from "@/component/help.component";

// Initialising contextMenu
const contextMenu = new ContextMenu("#menu");

// creating field area, to generate objects there
createArea();
const arrayHelpText = [
  "Start timer - Пользователь задает время, создается маленький таймер",
  "Create music - игра в которой можно самому нажимая клавиши придумать музыку",
  "Get a quote - Создается случайный блок с случайной цитатой",
  "Generate random block - Создается случайная по размеру и цвету фигура в рандомном месте экрана",
  "Weather forecast - мини приложение чтобы узнать погоду в своём городе",
  "Given input is a Palindrome? - можно узнать является ли слово или число полиндромом",
  "Generate Random Sound - Издается случайный звук",
  "Create Random Background Color - Изменяется фон сайта на случайный цвет",
  "Counts clicks made in 3 seconds - подсчёт кликов за установленное вами время",
];
const area = document.querySelector(".area");
const descriptionHelper = createEl("div", "", ["help-description"]);
const helpBtn = createEl("button", "Help", ["help-btn"]);

document.body.append(descriptionHelper);
descriptionHelper.append(helpBtn);
const blockHelp = showHelpComponent(arrayHelpText);
descriptionHelper.append(blockHelp);

helpBtn.addEventListener("click", () => {
  const helpList = document.querySelector(".help-list");
  if (helpList.classList.contains("active")) {
    helpList.classList.remove("active");
  } else {
    helpList.classList.add("active");
  }
});

// чтобы только на квадрате меню открывалось
area.addEventListener("contextmenu", (event) => {
  contextMenu.open(event);
});
document.body.addEventListener("click", (event) => {
  contextMenu.close(event);
});

// init modules
const clickModule = new ClicksModule(
  "clickModule",
  "Counts clicks made in 3 seconds"
);
const backgroundModule = new BackgroundModule(
  "randomColor",
  "Create Random Background Color"
);
const randomSound = new RandomSound("randomSound", "Generate Random Sound");
const isPalindrome = new IsPalindromeModule(
  "isPalindrome",
  "Given input is a Palindrome?"
);
const shapeModule = new ShapeModule("ShapeModule", "Generate random block");
const customMessage = new CustomMessage("customMessage", "Get a quote");
const createMusic = new CreateMusicModule("createMusic", "Create Music");
const timer = new Timer("timer", "Start timer");
const weatherModule = new WeatherModule("weatherModule", "Weather forecast");

// add modules to contextMenu
contextMenu.add(clickModule);
contextMenu.add(backgroundModule);
contextMenu.add(randomSound);
contextMenu.add(isPalindrome);
contextMenu.add(weatherModule);
contextMenu.add(shapeModule);
contextMenu.add(customMessage);
contextMenu.add(createMusic);
contextMenu.add(timer);
