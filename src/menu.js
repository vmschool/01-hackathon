import { Menu } from "./core/menu";
import { menuPosition } from "./utils";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = [];
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.open(event);
    });
  }
  open(event) {
    menuPosition(event, this.el);
    this.el.classList.add("menu", "open");
    this.el.addEventListener("click", (event) => {
      let { target } = event;
      let datasetModule = target.dataset.type;
      this.modules.forEach((element) => {
        if (datasetModule === element.type) {
          element.trigger();
        }
        this.close();
      });
    });
  }

  close() {
    this.el.classList.remove("open");
  }

  add(module) {
    this.modules.push(module);
    this.el.innerHTML += module.toHTML();
  }
}
