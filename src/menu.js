import { Menu } from './core/menu';
import * as modules from './modules';
import { labels } from './db/labels';
import { textToAttribute } from './utils';

export default class ContextMenu extends Menu {
  #root;

  constructor(selector) {
    super(selector);
    this.#root = document.body;
    this.open();
    this.modules = {};
    this.modulesHandler();
  }

  modulesHandler() {
    this.el.addEventListener('click', this.runTrigger);
  }

  runTrigger = (event) => {
    const { target } = event;
    this.modules[target.dataset.type].trigger();
  }


  open() {
    this.#root.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.el.classList.add('open');
      this.el.style.top = `${ event.clientY }px`;
      this.el.style.left = `${ event.clientX }px`;

      this.el.innerHTML = '';
      Object.keys(modules).forEach((module) => {
        const instance = new modules[module](textToAttribute(module), labels[module]);
        this.modules[textToAttribute(module)] = instance;
        this.add(instance);
      });
    });
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    this.el.innerHTML += module.toHTML();
  }
}
