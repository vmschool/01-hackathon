import "./styles.css";
import ContextMenu from "./menu";
import Timer from "./modules/timer.module";
import {createArea} from "./utils";

const timerModule = new Timer("timer", "Запустить Таймер");
const contextMenuModule = new ContextMenu('#menu');
const contextMenu = document.querySelector(".menu");
createArea();

contextMenuModule.add(timerModule);

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
