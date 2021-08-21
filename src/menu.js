import {Menu} from './core/menu'
import { ClicksModule } from './modules/clicks.module'
import { MessageModule } from './modules/message.module'

const modulesArray = [ClicksModule, MessageModule]

export class ContextMenu extends Menu {


    open() {
        this.el.style.top = `${event.clientY}px`
        this.el.style.left = `${event.clientX}px`
        this.el.classList.add('open')
    }
    
    close() {
        this.el.classList.remove('open')
    }
    
    add() {
        const menuInnerHTML = modulesArray.map((module) => {
            const moduleInstance = new module
            const moduleInnerHTML = moduleInstance.toHTML()
            // moduleInstance.trigger()

            return moduleInnerHTML
        })

        this.el.innerHTML = menuInnerHTML.join('; ')
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            this.open()


        })
    }
}