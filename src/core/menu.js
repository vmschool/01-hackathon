export class Menu {
  constructor(selector) {
    this.el = document.querySelector(selector)

    document.body.addEventListener('click', (event) => {
      if (event.target.offsetParent !== this.el) {
        this.close()
      }
    })
  }

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

  add() {
    throw new Error(`"add" method should be implemented in Menu"`)
  }
}
