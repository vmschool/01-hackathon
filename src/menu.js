import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  #list = {};
  constructor() {
    super(".menu");

    this.el.addEventListener("click", ({ target }) => {
      const menuItem = target.closest(".menu-item");
      if (!menuItem) return;
      this.close();
      const type = menuItem.dataset.type;
      this.#list[type].trigger();
    });

    document.body.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.#setPosition(event);
      this.open();
    });
  }
  open() {
    this.el.classList.add("open");
  }
  close() {
    this.el.classList.remove("open");
  }
  add(module) {
    const { type } = module;
    this.#list[type] = module;
    this.el.innerHTML += module.toHTML();
  }
  #setPosition(event) {
    const { clientX, clientY } = event;
    const menuWidth = this.el.offsetWidth;
    const menuHeight = this.el.offsetHeight;

    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;

    let x = clientX;
    let y = clientY;

    if (x > windowWidth - menuWidth) x -= menuWidth;
    if (y > windowHeight - menuHeight) y -= menuHeight;

    this.el.style.left = x + "px";
    this.el.style.top = y + "px";
  }
}
