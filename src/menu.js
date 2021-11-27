import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  open(event) {
    event.preventDefault();
    this.el.style.top = `${event.clientY + 10}px`;
    this.el.style.left = `${event.clientX + 10}px`;
    this.el.classList.add = "open";
  }

  close() {
    this.el.classList.remove("open");
  }

  add(module) {
    this.el.insertAdjacentHTML("afterbegin", module.toHTML());
  }
}
