import { Menu } from './core/menu'
import { TimerModule } from './modules/timer.module'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'
import { Sound } from './modules/sound.module'

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
  }

  add() {
    const menu = document.querySelector('#menu')

    // Добавление в меню

    const timerModule = new TimerModule()
    menu.insertAdjacentHTML('afterbegin', timerModule.toHTML())

    const backgroundModule = new BackgroundModule()
    menu.insertAdjacentHTML('beforeend', backgroundModule.toHTML())

    const shapeModule = new ShapeModule()
    menu.insertAdjacentHTML('beforeend', shapeModule.toHTML())

    const sound = new Sound()
    menu.insertAdjacentHTML('beforeend', sound.toHTML())

    // Запуск модуля

    menu.addEventListener('click', (e) => {
      let target = e.target
      target.dataset.type === 'timer' ? timerModule.trigger() : false
      target.dataset.type === 'background' ? backgroundModule.trigger() : false
      target.dataset.type === 'shape' ? shapeModule.trigger() : false
      target.dataset.type === 'audio' ? sound.trigger() : false
    })
  }
}
