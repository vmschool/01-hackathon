import './styles.css'
import { ContextMenu } from './menu'

const contextMenu = new ContextMenu('ul')

contextMenu.add(`<li class="menu-item" data-type="type">test</li>`)
contextMenu.add(`<li class="menu-item" data-type="type">test</li>`)


document.body.addEventListener('contextmenu', event => {
    event.preventDefault();
    contextMenu.open(event.clientX, event.clientY)
    return false;
}, false);