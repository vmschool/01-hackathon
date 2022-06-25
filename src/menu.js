import { Menu } from './core/menu';

export default class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.modulesList = {};
        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            if (event.target.offsetParent !== this.el) {
                this.open(event, this.el);
            }
        });
        this.el,
            addEventListener('click', event => {
                const moduleType = event.target.dataset.type;
                if (moduleType) {
                    this.modulesList[moduleType].trigger();
                }
            });
    }

    adjustMenuPosition(menuX, menuY, element) {
        const windowMaxX = window.innerWidth;
        const windowMaxY = window.innerHeight;
        const menuHeigth = element.getBoundingClientRect().height;
        const menuWidth = element.getBoundingClientRect().width;
        let newMenuX = menuX;
        let newMenuY = menuY;
        if (menuX + menuWidth > windowMaxX) {
            newMenuX = windowMaxX - menuWidth - 10;
        }
        if (menuY + menuHeigth > windowMaxY) {
            newMenuY = windowMaxY - menuHeigth - 10;
        }
        element.setAttribute('style', `top:${newMenuY}px; left:${newMenuX}px;`);
    }

    open(event, element) {
        const menuX = event.offsetX;
        const menuY = event.offsetY;
        element.setAttribute('style', `top:${menuY}px; left:${menuX}px;`);
        element.classList.add('open');
        this.adjustMenuPosition(menuX, menuY, element);
    }

    close() {
        this.el.classList.remove('open');
    }

    add(...modules) {
        modules.forEach(module => {
            this.modulesList[module.type] = module;
            this.el.insertAdjacentHTML('beforeend', module.toHTML());
        });
    }
}
