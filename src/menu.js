import { Menu } from './core/menu';

export default class ContextMenu extends Menu {
	#contextMenuItemsNumber = 0;
	
	open(event) {
		event.preventDefault();
		const menuCoordinates = this.#getMenuCoordinates(
			event.x,
			event.y, 
			window.innerWidth, 
			window.innerHeight, 
			this.#contextMenuItemsNumber
		);
		this.el.style.left = `${menuCoordinates.x}px`;
		this.el.style.top = `${menuCoordinates.y}px`;
		this.el.classList.add("open");
	}
	
	close() {
		this.el.classList.remove("open");
	}
	
	add(contextMenuItemHtml) {
		this.#contextMenuItemsNumber++;
		this.el.insertAdjacentHTML("beforeEnd", contextMenuItemHtml);
	}
	
	#getMenuCoordinates(clickedOnX, clickedOnY, browserWidth, browserHeight, contextMenuItemsNumber) {
		const MENU_WIDTH_IN_PIXELS = 270;
		const MENU_ITEM_HEIGHT_IN_PIXELS = 36;
		
		let menuCoordinates = {x: clickedOnX, y: clickedOnY};
		
		if (browserWidth - clickedOnX < MENU_WIDTH_IN_PIXELS) {
			menuCoordinates.x -= MENU_WIDTH_IN_PIXELS - (browserWidth - clickedOnX);
		}
		if (browserHeight - clickedOnY < MENU_ITEM_HEIGHT_IN_PIXELS * contextMenuItemsNumber) {
			menuCoordinates.y -= MENU_ITEM_HEIGHT_IN_PIXELS * contextMenuItemsNumber - (browserHeight - clickedOnY);
		}
		
		return menuCoordinates;
	}
}
