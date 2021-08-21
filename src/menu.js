import { Menu } from "./core/menu";
import * as settings from "./constants/settings";
import { menuPosition } from "./utils";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.add();
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.open(event);
    });
  }

  open(event) {
    menuPosition(event, this.el);
    this.el.classList.add("menu", "open");
  }

  close() {
    this.el.classList.remove("open");
  }

  add() {
    settings.modules.forEach((element) => {
      let module = document.createElement("li");
      module.textContent = element;
      module.classList.add("menu-item");
      this.el.append(module);
    });
  }
}
