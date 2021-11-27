import {Menu} from './core/menu'
export class ContextMenu extends Menu {
    static contextMenu = document.querySelector('#menu')
    
    super(){}

    open(positionX, positionY){
        ContextMenu.contextMenu.classList.add('open')

        const windowsScreenWidth = window.innerWidth
        const windowsScreenHeight = window.innerHeight
        const contextMenuHeight = ContextMenu.contextMenu.offsetHeight 

        positionX + 250 >= windowsScreenWidth
        ? ContextMenu.contextMenu.style.left = `${windowsScreenWidth - 250}px`
        : ContextMenu.contextMenu.style.left = `${positionX}px`
        
        console.log(positionY, contextMenuHeight, windowsScreenHeight)
        positionY + contextMenuHeight >= windowsScreenHeight
        ? ContextMenu.contextMenu.style.top = `${windowsScreenHeight - contextMenuHeight}px`
        : ContextMenu.contextMenu.style.top = `${positionY}px`
    }

    close(){
        ContextMenu.contextMenu.classList.remove('open')
    }

    add(element){
        ContextMenu.contextMenu.insertAdjacentHTML('beforeend', element)
    }
}