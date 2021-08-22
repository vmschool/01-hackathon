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

    this.contextMenu$.style.display = 'block'
    this.contextMenu$.style.left =
      Math.min(event.pageX, document.body.offsetWidth - this.contextMenu$.offsetWidth - 5) + 'px'
    this.contextMenu$.style.top =
      Math.min(event.pageY, document.body.offsetHeight - this.contextMenu$.offsetHeight - 5) + 'px'
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
