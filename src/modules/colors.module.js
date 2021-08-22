import {Module} from '../core/module'
import {random} from '../utils'
import '../css/colors.css'

export class ColorsModule extends Module {
  constructor(type = 'colors', text = 'Набор случайных цветов') {
    super(type, text)
  }

  trigger() {
    const wrap$ = document.createElement('div')
    wrap$.className = 'colors-wrap'
    wrap$.title = 'Кликните по номеру цвета, чтобы скопировать'

    'colors'.split('').forEach(() => {
      const randomColor = this.#getRandomColor()

      const line$ = document.createElement('div')
      line$.className = 'colors-line'

      const color$ = document.createElement('div')
      color$.className = 'colors-color'
      color$.style.background = randomColor

      const colorHash$ = document.createElement('h3')
      colorHash$.className = 'colors-color-hash'
      colorHash$.style.color = randomColor
      colorHash$.textContent = randomColor
      colorHash$.addEventListener('click', event => {
        const {target} = event
        console.log(target.textContent)
        navigator.clipboard.writeText(target.textContent)
        const pop$ = document.createElement('div')
        pop$.className = 'colors-pop'
        pop$.textContent = 'Цвет скопирован'
        target.append(pop$)
        setTimeout(() => {
          pop$.textContent = ''
          this.#hide(pop$)
        }, 700)
      })

      line$.append(color$, colorHash$)
      wrap$.append(line$)
    })

    const closeBtn$ = document.createElement('button')
    closeBtn$.className = 'colors-close-btn'
    closeBtn$.textContent = 'Закрыть'
    closeBtn$.addEventListener('click', () => {
      wrap$.innerHTML = ''
      this.#hide(wrap$)
    })

    wrap$.append(closeBtn$)

      console.log('wrap$', wrap$)
    document.body.append(wrap$)
  }

  #hide(el) {
    el.remove()
  }

  #getRandomColor() {
    return `#${
      'xxxxxx'
        .split('')
        .map(x => x = random(0, 15).toString(16))
        .join('')
    }`
  }
}
