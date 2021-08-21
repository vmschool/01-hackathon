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

    this.#root.addEventListener('click', () => {
      this.close();
    });
  }

  modulesHandler() {
    this.el.addEventListener('click', this.#runTrigger);
  }

  #runTrigger = (event) => {
    const { target } = event;
    this.modules[target.dataset.type].trigger();
  };

  #getCoordinates = (event) => {
    return {
      x: event.clientX,
      y: event.clientY,
      width: this.el.offsetWidth,
      height: this.el.offsetHeight
    };
  };

  open() {
    this.#root.addEventListener('contextmenu', (event) => {
      if (!Object.keys(modules).length) return;

      event.preventDefault();
      this.el.innerHTML = '';
      Object.keys(modules).forEach((module) => {
        const instance = new modules[module](textToAttribute(module), labels[module] || textToAttribute(module));
        this.modules[textToAttribute(module)] = instance;
        this.add(instance);
      });
      this.el.classList.add('open');

      const { x, y, width, height } = this.#getCoordinates(event);

      if (width + x > this.#root.clientWidth) {
        this.el.style.left = `${ x - width }px`;
      } else {
        this.el.style.left = `${ x }px`;
      }

      if (height + y > this.#root.clientHeight) {
        this.el.style.top = `${ y - height }px`;
      } else {
        this.el.style.top = `${ y }px`;
      }
    });
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    this.el.innerHTML += module.toHTML();
  }
}
