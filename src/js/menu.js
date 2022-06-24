import Module from './core/module';
import Menu from './core/menu';

export default class ContextMenu extends Menu {
  constructor() {
    super();
    this.el.classList.add('menu');
    this.modules = [];

    this.setClickListeners();
  }

  setClickListeners() {
    document.body.addEventListener('click', (event) => {
      if (event.target.offsetParent !== this.el) {
        this.close();
        return;
      }

      const selectModule = this.modules.find((module) => module.el === event.target);

      if (!selectModule) {
        return;
      }

      selectModule.trigger();
    });
  }

  add(module) {
    if (!(module instanceof Module)) {
      throw new TypeError('not Module');
    }

    this.modules.push(module);
  }

  setPosition(top, left) {
    this.el.style.top = `${top}px`;
    this.el.style.left = `${left}px`;
  }

  get isOpen() {
    return this.el.classList.contains('open');
  }

  open() {
    this.el.classList.add('open');
  }

  close() {
    this.el.classList.remove('open');
  }

  clearContent() {
    this.el.innerHTML = '';
  }

  render(parentElement) {
    if (this.el.parentNode !== parentElement) {
      parentElement.insertAdjacentElement('beforeEnd', this.el);
    }

    this.clearContent();

    this.modules.forEach((module) => {
      this.el.insertAdjacentElement('beforeEnd', module.el);
    });
  }
}
