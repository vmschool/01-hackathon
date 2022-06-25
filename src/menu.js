import {Menu} from './core/menu'
import { renderMenu, closeMenu } from './utils'

// import * as modules from './modules'

// должен быть импорт всех модулей
const modules = [
    { type: 1, text: 'BackgroundModule' },
    { type: 2, text: 'ClicksModule' },
    { type: 3, text: 'ShapeModule' },
    { type: 4, text: 'MessageModule' },
    { type: 5, text: 'TimerModule' },
]

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)

        this.open()
        this.close()
    }

    open() {
        document.body.addEventListener('contextmenu', event => {
            event.preventDefault() // отключаем функционал

            this.close()

            const { clientX: mouseX, clientY: mouseY } = event //позиции клика

            renderMenu(modules, mouseX, mouseY)

        })
    }

    close() {
        const openMenu = document.body.getElementsByClassName('open')

        while (openMenu.length > 0) {
            openMenu[0].remove() // закрываем открытое меню, если было открыто ранее
        }
    }
}