import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(el, menuList, menuItems) {
    super(el);
    this.menuList = document.querySelector(menuList);
    this.menuItems = menuItems;
    this.menuItems.forEach((item) => {
      const menuItem = document.createElement("li");
      menuItem.className = "menu-item";
      menuItem.innerHTML = item;
      this.menuList.append(menuItem);
    });
  }

  render() {
    this.el.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      console.log(event);
      this.menuList.style.left = `${event.pageX}px`;
      this.menuList.style.top = `${event.pageY}px`;
    });
  }
}

export default ContextMenu;
