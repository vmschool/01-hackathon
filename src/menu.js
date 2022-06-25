import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  #modules
  constructor(selector, modules) {
    super(selector)
    this.#modules = modules || []
  }

  render() {
    this.#modules.forEach(Module => {
      this.add(Module)
    })
  }

  open(event) {
    event.preventDefault()
    deleteSizes(this.el)

    document.body.innerHTML = ''
    document.body.style = 'default'
    document.body.append(this.el)

    this.el.classList.add('open')
    const elCoords = this.el.getBoundingClientRect()
    const {width: maxWidth, height: maxHeight} = document.body.getBoundingClientRect()
    
    if (event.x + elCoords.width > maxWidth) {
      this.el.style.right = (maxWidth - event.x) + 'px'
    } else {
      this.el.style.left = event.x + 'px'
    }
    if (event.y + elCoords.height > maxHeight) {
      this.el.style.bottom = (maxHeight - event.y) + 'px'
    } else {
      this.el.style.top = event.y + 'px'
    }

    this.el.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', event => {
      const {target} = event
      this.#modules.forEach(Module => {
        if (target.dataset.type === Module.type) {
          Module.trigger()
        }
      })
      this.close()
    }, {once: true})
  })
  }

  close() {
    this.el.classList.remove('open')
  }

  add(Module) {
    this.el.insertAdjacentHTML('beforeend', Module.toHTML())
  }
}

function deleteSizes(el) {
  el.style.top = ''
  el.style.right = ''
  el.style.bottom = ''
  el.style.left = ''
}
