import './styles.css'
import ContextMenu from './menu'

// const CONTEXT_MENU_EL = document.querySelector('#menu')

const contextMenu = new ContextMenu('#menu')
contextMenu.add('module1', 'module2', 'module3', 'module4')