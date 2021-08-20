import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  modules
  contextMenu$

  constructor(selector) {
    super(selector)

    this.modules = []
    this.contextMenu$ = document.querySelector('#menu')

    document.body.addEventListener('contextmenu', this.open.bind(this))
    this.contextMenu$.addEventListener('click', this.triggerModule.bind(this))
  }

  open(event) {
    event.preventDefault()
    this.contextMenu$.style.left = event.pageX + 'px'
    this.contextMenu$.style.top = event.pageY + 'px'
    this.contextMenu$.style.display = 'block'
  }

  close() {
    this.contextMenu$.style.display = 'none'
  }

  add(module) {
    this.modules.push(module)
    this.contextMenu$.insertAdjacentHTML('beforeend', module.toHTML())
  }

  triggerModule(event) {
    const menuItem = event.target.closest('.menu-item')

    this.modules.forEach(module => {
      if (module.type === menuItem.dataset.type) {
        module.trigger()
      }
    })

    this.close()
  }
}
