import { Menu } from './core/menu';
import { ClicksModule } from './modules/clicks.module';
import { MessageModule } from './modules/message.module';
import { ShapeModule } from './modules/shape.module';
import { positionMenu } from './utils';

const modulesArray = [ClicksModule, MessageModule, ShapeModule];

export class ContextMenu extends Menu {
  add() {
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

    this.el.innerHTML = menuInnerHTML;
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      document.querySelector('.container').innerHTML = '';
      this.open();
      positionMenu(event);
    });

    this.el.addEventListener('click', (event) => {
      this.close();
      const { target } = event;
      menuItemsInfo.forEach((item) => {
        if (target.dataset.type === item.dataType) {
          item.instance.trigger();
        }
      });
    });
  }
}
