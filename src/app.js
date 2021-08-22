import { ContextMenu } from './menu'
import './styles.css'

const contextMenu = new ContextMenu("#menu")

document.addEventListener("contextmenu", (event) => {
	event.preventDefault()
    contextMenu.open(event);
}, true);

document.addEventListener("click", (event) => {
	event.preventDefault()
    contextMenu.close(event);
}, true);


