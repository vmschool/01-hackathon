import {Menu} from './core/menu'
export class ContextMenu extends Menu {
    #contextMenu
    #elementsMenu

    constructor(){
        super()
        this.#contextMenu = document.querySelector('#menu')
        this.#elementsMenu = []
    }
    

    open(positionX, positionY){
        this.#contextMenu.classList.add('open')

        const windowsScreenWidth = window.innerWidth
        const windowsScreenHeight = window.innerHeight
        const contextMenuHeight = this.#contextMenu.offsetHeight 

        positionX + 250 >= windowsScreenWidth
        ? this.#contextMenu.style.left = `${windowsScreenWidth - 250}px`
        : this.#contextMenu.style.left = `${positionX}px`
        
        positionY + contextMenuHeight >= windowsScreenHeight
        ? this.#contextMenu.style.top = `${windowsScreenHeight - contextMenuHeight}px`
        : this.#contextMenu.style.top = `${positionY}px`
    }

    close(){
        this.#contextMenu.classList.remove('open')
    }

    add(element){
        this.#contextMenu.insertAdjacentHTML('beforeend', element.toHTML())
        this.#elementsMenu.push(element)
    }

    startElementTriger(eventType){
        const element = this.#elementsMenu.find(element =>element.type === eventType)
        element.trigger()
    }

}