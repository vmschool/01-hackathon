import {Menu} from './core/menu'
import { renderMenu, closeMenu } from './utils'

// должен быть импорт всех модулей
const modules = [
    { type: 1, text: 'BackgroundModule' },
    { type: 2, text: 'ClicksModule' },
    { type: 3, text: 'ShapeModule' },
    { type: 4, text: 'MessageModule' },
    { type: 5, text: 'TimerModule' },
]

export class ContextMenu extends Menu {

    open() {
        document.body.addEventListener('contextmenu', event => {
            event.preventDefault() // отключаем функционал

            const { clientX: mouseX, clientY: mouseY } = event //позиции клика

            closeMenu()

            renderMenu(modules, mouseX, mouseY)
        })
    }

    close() {
        document.body.addEventListener('click', event => {
            event.preventDefault()

            closeMenu()
        })
    }
}