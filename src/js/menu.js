import Module from './core/module';
import Menu from './core/menu';
import { moveAndResizeElement, moveElement } from './utils';

export default class ContextMenu extends Menu {
  constructor() {
    super();
    this.el.classList.add('menu');
    this.modules = [];

    this.clickEffect = this.createClickEffect();
    document.body.append(this.clickEffect);
    this.setClickListeners();
  }

  createClickEffect() {
    const clickEffect = document.createElement('div');
    clickEffect.classList.add('click-effect', 'hide');

    const innerCircle = document.createElement('div');
    innerCircle.classList.add('circle', 'background-transparent', 'position-absolute');
    innerCircle.style.border = '1px solid white';
    moveAndResizeElement(innerCircle, 0, 0, 50, 50);

    const middleCircle = document.createElement('div');
    middleCircle.classList.add('circle', 'background-transparent', 'position-absolute');
    middleCircle.style.border = '1px solid black';
    moveAndResizeElement(middleCircle, 0, 0, 52, 52);

    const outerCircle = document.createElement('div');
    outerCircle.classList.add('circle', 'background-transparent', 'position-absolute');
    outerCircle.style.border = '1px solid white';
    moveAndResizeElement(outerCircle, 0, 0, 54, 54);

    clickEffect.appendChild(innerCircle);
    clickEffect.appendChild(middleCircle);
    clickEffect.appendChild(outerCircle);

    return clickEffect;
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

    this.el.addEventListener('click', (event) => {
      const { clientY: top, clientX: left } = event;

      moveElement(this.clickEffect, top, left);
      this.clickEffect.classList.remove('hide');

      setTimeout(() => {
        this.clickEffect.classList.add('hide');
      }, 200);
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
