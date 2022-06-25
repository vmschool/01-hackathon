import { Menu } from './core/menu';
import { Module } from './core/module';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
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
            const newModule = document.querySelector(`[data-type="${module.type}"]`);
            newModule.addEventListener('click', (event) => {
                module.trigger();
            })
        }
    }
}