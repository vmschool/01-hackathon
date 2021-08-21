import { Menu } from './core/menu'

export class ContextMenu extends Menu {
  open() {
    const menu = document.querySelector('#menu')
    document.addEventListener('contextmenu', function (e) {
      menu.style.display = 'block'
      menu.style.position = 'absolute'
      menu.style.top = `${e.pageY}px`
      menu.style.left = `${e.pageX}px`
      e.preventDefault()
    })
  }

  close() {
    const menu = document.querySelector('#menu')
    document.addEventListener('click', (e) => {
      e.button !== 2 ? (menu.style.display = 'none') : false
    })
    menu.addEventListener('click', (e) => {
      e.stopPropagation()
    })
  }
}
