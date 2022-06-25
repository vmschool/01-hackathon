import { Menu } from './core/menu';
import { Module } from './core/module';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.modules = [];
    }

    open() {
        this.el.classList.add('open');
    }

    close() {
        this.el.classList.remove('open');
    }

    add(module) {
        if (module instanceof Module) {
            this.el.innerHTML += module.toHTML();
            this.modules.push(module);
        }
    } 
}