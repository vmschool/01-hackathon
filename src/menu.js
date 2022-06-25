import { Menu } from './core/menu';

export default class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            if (event.target.offsetParent !== this.el) {
                this.open(event.offsetX, event.offsetY, this.el);
              }
        });
    }

    open(offsetX, offsetY, element) {
        element.setAttribute('style', `top:${offsetY}px; left:${offsetX}px;`)
        element.classList.add('open')
    }
    
    close() {
        this.el.classList.remove('open')
    }

    add(...modules) {
        modules.forEach(module => {
            this.el.insertAdjacentHTML('beforeend', `
                <li class="menu-item">${module}</li>
            `)
        })
    }
}
