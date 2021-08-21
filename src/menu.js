import {Menu} from './core/menu';
import {Module} from "@/core/module";

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            this.open(event.clientY, event.clientX)
        }, false)
        this.el.addEventListener('click', (event) => {
            console.log(event)
            console.log(this.obj)
            const type = event.target.dataset.type
            console.log(type)
            this.obj[type].trigger()
        })
    }

    obj = {}

    open(y, x) {
        this.el.classList.add('open')
        this.el.style.left = (x - 10) + "px"
        this.el.style.top = (y - 10) + "px"
    }

    close() {
        this.el.classList.remove('open')
    }

    add(item) {
        this.el.insertAdjacentHTML('afterbegin', item.toHTML())
        this.obj[item.type] = item
    }
}