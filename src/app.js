import "./styles.css";
import ContextMenu from "./menu";
import {createArea} from "./utils";
import {BackgroundModule} from "./modules/background.module";
import {RandomSound} from "./modules/randomSound.module";

const backgroundModule = new BackgroundModule()
const randomSound = new RandomSound()


const contextMenuModule = new ContextMenu('#menu');
const contextMenu = document.querySelector(".menu");
createArea();

contextMenuModule.add(backgroundModule)
contextMenuModule.add(randomSound)

document.body.addEventListener("contextmenu", (event) => {
	contextMenuModule.open(event);
});
document.body.addEventListener("click", (event) => {
	contextMenuModule.close(event);
});

contextMenu.addEventListener("click", (event) => {
	const clickedModule = contextMenuModule.modules.reduce(
		(clickedModule, module) =>
			module.type === event.target.dataset.type
				? (clickedModule = module)
				: clickedModule
	);
	if (!clickedModule) return;

	clickedModule.trigger();
});
