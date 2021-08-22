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
// Initialising contextMenu
const contextMenu = new ContextMenu("#menu");

// creating field area, to generate objects there
createArea();

const area = document.querySelector(".area");

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
