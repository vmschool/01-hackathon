import { Menu } from './core/menu';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
    }

    open(event) {
        event.preventDefault();
        this.el.style.top = `${event.clientY}px`;
        this.el.style.left = `${event.clientX}px`;
        this.el.classList.add('open');
        document.body.addEventListener('click', event => {
            if (event.target.className !== 'menu-item') {
                this.close();
            };
        });
    };

    add(module) {
        this.el.insertAdjacentHTML('afterbegin', module.toHTML());
        this.el.querySelector('.menu-item').addEventListener('click', (event) => {
            const area = document.querySelector("#area");
            area.innerHTML = "";
            module.trigger(event);
            this.close();
        });
    }

    close() {
      this.el.classList.remove('open');
    }
}