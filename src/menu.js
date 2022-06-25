import {Menu} from './core/menu'
import {getPosition} from "./utils";

export class ContextMenu extends Menu {
    #addedModules

    constructor(selector) {
        super(selector);
        this.#showMenu()
        this.#triggerModule()
        this.#addedModules = {}
    }

    open() {
        const menuPosition = getPosition()
        this.el.style.left = `${menuPosition.x}px`
        this.el.style.top = `${menuPosition.y}px`
        this.el.style.display = 'block'
    }

    close() {
        this.el.style.display = 'none'
    }

    add(instanceofModule) {
        this.#addedModules[instanceofModule.type] = instanceofModule
        this.el.insertAdjacentHTML('beforeend', instanceofModule.toHTML())
    }

    #showMenu() {
        document.body.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            this.open()
        })
    }

    #triggerModule() {
        this.el.addEventListener('click', (event) => {
            const selectedModule = event.target.dataset.type
            this.#addedModules[selectedModule].trigger()
            this.close()
        })
    }
}