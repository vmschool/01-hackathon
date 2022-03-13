import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor() {
    super(".menu");

    document.body.addEventListener("contextmenu", (ev) => {
      ev.preventDefault();
      this.position = { x: ev.clientX, y: ev.clientY };
      this.open();
    });
  }

  open() {
    if (!(this.el.hasChildNodes() && this.position)) return;

    this.el.style.top = `${this.position.y}px`;
    this.el.style.left = `${this.position.x}px`;
    this.el.classList.add("open");
  }

  close() {
    this.el.classList.remove("open");
  }

  add(module) {
    this.el.insertAdjacentHTML("beforeend", module.toHTML());
  }
}
