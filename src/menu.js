import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }
  click() {
    console.log("Context menu");
  }
  open() {
    this.el.classList.add("open");
  }
  close() {
    this.el.classList.remove("open");
  }
  add(modules) {
      modules.forEach(module => {
        this.el.insertAdjacentHTML("beforeend", module);
      });
  }
}
