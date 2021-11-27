import { Menu } from './core/menu';

export class ContextMenu extends Menu {
    #modules;

    constructor(selector) {
        super(selector);
        this.#modules = [];
    }

    open(clientX, clientY) {
        this.el.classList.add('open');
        this.el.style.top = `${clientY}px`;
        this.el.style.left = `${clientX}px`;
    }

    close() {
        this.el.classList.remove('open');
    }

    add(...currentModules) {
        this.#modules.push(...currentModules);
        currentModules.forEach((module) => {
            const currentLi = new DOMParser().parseFromString(module.toHTML(), 'text/html').body.firstChild;
            this.el.append(currentLi);
            currentLi.addEventListener('click', () => {
                module.trigger();
                this.close();
            });
        });
    }

    init() {
        document.body.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            const { clientX, clientY } = event;
            this.open(clientX, clientY);
        });
    }
}
