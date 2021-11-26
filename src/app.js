import './styles.css';
import {ContextMenu} from "./menu";

const body = document.querySelector('body')
body.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    const contextMenu = new ContextMenu('#menu')
    contextMenu.open(e.clientX, e.clientY)
})