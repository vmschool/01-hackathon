import {Menu} from './core/menu';
import {stringToHTML} from './utils';

export class ContextMenu extends Menu {
  open(mouseX, mouseY) {
    this.el.classList.add('open');
    this.el.style.top = `${mouseY}px`;
    this.el.style.left = `${mouseX}px`;
  }
  close() {
    this.el.classList.remove('open');
  }
  add(module) {
    const menuEl = this.el;
    module.forEach(item => {
    const moduleElStr = item.toHTML();
    const moduleEl = stringToHTML(moduleElStr);
    menuEl.append(moduleEl);
    });
  }
  removeListener(eventType, func) {
    this.el.removeEventListener(eventType, func);
  }
}