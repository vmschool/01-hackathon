import { ContextMenu } from './menu';
import './styles.css';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';

const contextMenu = new ContextMenu("#menu");

document.addEventListener("contextmenu", (event) => {
	event.preventDefault();
    contextMenu.open(event);
}, true);

document.addEventListener("click", (event) => {
	event.preventDefault();
    contextMenu.close(event);
}, true);

// variables
const clicksModule = new ClicksModule();
const shapesModule = new ShapeModule();

// adding elements to menu
contextMenu.add(clicksModule);
contextMenu.add(shapesModule);