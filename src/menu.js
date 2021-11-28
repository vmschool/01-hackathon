import { Menu } from './core/menu';

export class ContextMenu extends Menu {
    #modules;

    constructor(selector) {
        super(selector);
        this.#modules = [];
    }

    open(clientX, clientY) {
        this.el.classList.add('open');

        let top = clientY;
        let left = clientX;

        if (clientX + this.el.offsetWidth > window.innerWidth) {
            left = clientX - this.el.offsetWidth;
        }

        if (clientY + this.el.offsetHeight > window.innerHeight) {
            top = clientY - this.el.offsetHeight;
        }

        top = top + 'px';
        left = left + 'px';

        this.el.style.top = top;
        this.el.style.left = left;
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
            if (event.target === document.body) {
                this.open(clientX, clientY);
            }
        });
    }
}
