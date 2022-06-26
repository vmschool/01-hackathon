import { Menu } from './core/menu';
import { Module } from './core/module';
import { OPEN_CLASS } from './globals';

export class ContextMenu extends Menu {
  open(event) {
    this.el.classList.add(OPEN_CLASS);
    this.el.style.left = `${event.x}px`;
    this.el.style.top = `${event.y}px`;
  }

  close() {
    this.el.classList.remove(OPEN_CLASS);
  }

  add(module) {
    if (!(module instanceof Module)) return false;
    this.el.innerHTML += module.toHTML();
  }
}
