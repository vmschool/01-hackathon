import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(el, menuList, menuItems) {
    super(el, menuList);
    this.menuList = document.querySelector(menuList);
    this.menuItems = menuItems;
    this.open();
    this.close();
  }
}

export default ContextMenu;
