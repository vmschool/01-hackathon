import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = ["Поменять цвет", "Создать фигуру", "Кастомное сообщение", "Собственный модуль"];
  }

  close() {
    document.getElementById("menu").style.display = "none";
  }

  open(e) {
    e.preventDefault();
    if (document.getElementById("menu").style.display == "block") close();
    else {
      let newmenu = document.getElementById("menu");
      newmenu.style.display = "block";
      newmenu.style.left = e.pageX + "px";
      newmenu.style.top = e.pageY + "px";
    }
  }
  render() {
    const getMenu = document.querySelector("#menu");
    const getElements = this.modules.map((el) => `<li class="menu-item">${el}</li>`);
    getMenu.insertAdjacentHTML("afterbegin", getElements.join(""));

    document.onclick = this.close;
    document.oncontextmenu = this.open;
  }
}

export const menu = new ContextMenu();
menu.render();
