import { Menu } from './core/menu';
import { ClicksModule } from './modules/clicks.module';
import { MessageModule } from './modules/message.module';
import { ShapeModule } from './modules/shape.module';
import { SoundModule } from './modules/sound.module';
import { TimerModule } from './modules/timer.module';
import { BackgroundModule } from './modules/background.module';
import { positionMenu } from './utils';

const modulesArray = [ClicksModule, MessageModule, ShapeModule, SoundModule, TimerModule, BackgroundModule];

const menuItemsInfo = modulesArray.map((module) => {
  const moduleClassInstance = new module();
  const moduleInnerHTML = moduleClassInstance.toHTML();
  const moduleDataType = moduleClassInstance.type;
  return {
    instance: moduleClassInstance,
    innerHTML: moduleInnerHTML,
    dataType: moduleDataType,
  };
});

const menuInnerHTML = menuItemsInfo
  .map((module) => {
    return module.innerHTML;
  })
  .join('');
export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.#openContextMenu();
    this.#openModule();
  }

  open() {
    this.el.classList.add('open');
  }

  close() {
    this.el.classList.remove('open');
  }

  add(menuInnerHTML = '') {
    this.el.innerHTML = menuInnerHTML;
  }

  #openContextMenu() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.add(menuInnerHTML);
      this.open();
      positionMenu(event);
    });
  }

  #openModule() {
    this.el.addEventListener('click', (event) => {
      this.close();
      document.querySelector('.container').innerHTML = '';
      const { target } = event;
      menuItemsInfo.forEach((item) => {
        if (target.dataset.type === item.dataType) {
          item.instance.trigger();
        }
      });
    });
  }
}