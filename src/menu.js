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
        const menuItemsInfo = modulesArray.map((module) => {
            const moduleClassInstance = new module
            const moduleInnerHTML = moduleClassInstance.toHTML()
            const moduleDataType = moduleClassInstance.type
            return {
                instance: moduleClassInstance,
                innerHTML: moduleInnerHTML,
                dataType: moduleDataType,
            }
        })

        const menuInnerHTML = menuItemsInfo.map((module) => {
            return module.innerHTML
        }).join('; ')

        this.el.innerHTML = menuInnerHTML
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            this.open()
        })

        this.el.addEventListener('click', (event) => {
            const {target} = event
            menuItemsInfo.forEach(item => {
                if (target.dataset.type === item.dataType) {
                    item.instance.trigger()
                    console.log(`triggered ${item.dataType}`)
                }
                
            });
        })
    }
}