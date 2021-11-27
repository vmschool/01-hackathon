import {Menu} from './core/menu';

export class ContextMenu extends Menu {

  constructor(selector) {
    super(selector);
  }

  open(event) {
    event.preventDefault();
    this.el.classList.add("open");
  }

  close() {
    this.el.classList.remove("open");
  }

  add(module) {
    this.el.insertAdjacentHTML("beforeend", module.toHTML());

    this.el.addEventListener("click", (event) => {
      module.type === event.target.dataset.type ? module.trigger() : false;
    })
  }
}
