import { moveAndResizeElement, moveElement } from './utils';

export default class Application {
  constructor(moduleFactory, moduleNames, menu) {
    this.moduleFactory = moduleFactory;
    this.moduleNames = moduleNames;
    this.menu = menu;
    this.el = document.querySelector('body');

    this.clickEffect = this.createClickEffect();
    this.el.append(this.clickEffect);
  }

  createClickEffect() {
    const clickEffect = document.createElement('div');
    clickEffect.classList.add('click-effect', 'hide');

    const circle = document.createElement('div');
    circle.classList.add('circle', 'background-transparent', 'position-absolute');
    circle.style.border = '2px solid green';
    moveAndResizeElement(circle, 0, 0, 35, 35);

    clickEffect.appendChild(circle);

    return clickEffect;
  }

  changeClickEffectColor(color) {
    this.clickEffect.querySelector('div').style.borderColor = color;
  }

  run() {
    this.fiilAndRenderMenu();
    this.setEventListeners();
  }

  fiilAndRenderMenu() {
    this.moduleNames.forEach((moduleName) => {
      this.menu.add(this.moduleFactory.createModule(moduleName));
    });

    this.menu.render(this.el);
    this.menu.close(this.el);
  }

  setEventListeners() {
    this.el.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      const { clientY: top, clientX: left } = event;

      if (event.target === this.el) {
        this.clickEffectReaction(top, left, 'greenyellow');
      }

      this.menu.setPosition(top, left);
      this.menu.open();
    });

    this.el.addEventListener('click', (event) => {
      event.preventDefault();

      const { clientY: top, clientX: left } = event;

      if (event.target === this.el) {
        this.clickEffectReaction(top, left, 'black');
      }
    });
  }

  clickEffectReaction(top, left, color) {
    moveElement(this.clickEffect, top, left);
    this.clickEffect.classList.remove('hide');
    this.changeClickEffectColor(color);

    setTimeout(() => {
      this.clickEffect.classList.add('hide');
    }, 200);
  }
}
