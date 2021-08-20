import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor() {
        super('click analytics', text) 
    }

    trigger() {
        let clicksCounter = 0
        document.addEventListener('click', (event) => {
            const { target } = event
            if (target) {
                clicksCounter++
            }
        })
        const currentTimeout = 20000
        setTimeout(() => {
            this.text = `Количество кликов за ${currentTimeout / 1000} секунд равно ${clicksCounter}`
        }, currentTimeout)

        return clicksCounter
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}