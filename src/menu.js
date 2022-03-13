import {Menu} from './core/menu'
import {Module} from './core/module'

export class ContextMenu extends Menu {
    #modules;

    constructor(selector) {
        super(selector);
        this.#modules = [];
    }

    open() {
        if (this.#modules.length === 0) return;
        this.el.classList.add('open');
    }

    close() {
        this.el.classList.remove('open');
    }

    add(module, ...rest) {
        const arrModules = [module, ...rest];
        arrModules.forEach( module => {
            if (!(module instanceof Module) || this.#modules.includes(module) ) return;
            this.el.innerHTML += module.toHTML();
            this.#modules.push(module);
        })
    }

    start() {
        this.el.addEventListener('click', (event) => {
            if (event.target.parentNode === this.el) {
                const currentType = event.target.dataset.type;
                const currentModule = this.#modules.find(module => module.type === currentType);
                currentModule.trigger();
                console.log(currentModule)
            }
        })

        document.body.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            if (this.el.classList.contains('open')) {
                this.close();
            }
            this.el.style.left = event.clientX + 'px'
            this.el.style.top = event.clientY + 'px';
            this.open();
        })
    }

}
