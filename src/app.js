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
import {arrayHelpText} from "@/data/text.data";
import BeLikeBillModule from "./modules/beLikeBill.module";

// Initialising contextMenu
const contextMenu = new ContextMenu("#menu");

// creating field area, to generate objects there
createArea();
const area = document.querySelector(".area");
const descriptionHelper = createEl("div", "", ["help-description"]);
const helpBtn = createEl("button", "Help", ["help-btn"]);

document.body.append(descriptionHelper);
descriptionHelper.append(helpBtn);

helpBtn.addEventListener("click", () => {
  showHelpComponent(arrayHelpText);
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
	"Counts clicks in time"
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
const beLikeBill = new BeLikeBillModule("beLikeBillModule", "Generate Bill meme");

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
contextMenu.add(beLikeBill);
