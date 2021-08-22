import "./styles.css";
import { createArea, createEl } from "./utils";
import { showHelpComponent } from "./component/help.component";
import { arrayHelpText } from "./data/text.data";
import ContextMenu from "./menu";
import ClicksModule from "./modules/clicks.module";
import BackgroundModule from "./modules/background.module";
import RandomSoundModule from "./modules/randomSound.module";
import PalindromeModule from "./modules/palindrome.module";
import ShapeModule from "./modules/shape.module";
import CustomMessageModule from "./modules/customMessage.module";
import CreateMusicModule from "./modules/createMusic.module";
import WeatherModule from "./modules/weather.module";
import TimerModule from "./modules/timer.module";
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
const randomSound = new RandomSoundModule("randomSound", "Generate Random Sound");
const isPalindrome = new PalindromeModule(
  "isPalindrome",
  "Given input is a Palindrome?"
);
const shapeModule = new ShapeModule("ShapeModule", "Generate random block");
const customMessage = new CustomMessageModule("customMessage", "Get a quote");
const createMusic = new CreateMusicModule("createMusic", "Create Music");
const timer = new TimerModule("timer", "Start timer");
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
