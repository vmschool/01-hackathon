import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(el, menuList, menuItems) {
    super(el, menuList);
    this.menuList = document.querySelector(menuList);
    this.menuItems = menuItems;
    this.open();
    this.close();
  }

  render() {
    this.menuItems.forEach((item) => {
      const menuItem = document.createElement("li");
      menuItem.className = "menu-item";
      menuItem.textContent = item.name;
      this.menuList.append(menuItem);
    });
  }
}

export default ContextMenu;
