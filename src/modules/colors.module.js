import { Module } from "../core/module"
import { cel, qel, setStyle } from "../utils";

export class ColorsModule extends Module {
  constructor(type = 'colors', text = 'Набор случайных цветов') {
    super(type, text)
    this.styles = {
        div: {
            width: '200px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            marginBottom: '10px'
        },
        lineDiv: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flex: '1 1 0',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '5px'
        },
        color: {
            width: '80px',
            height: '25px',
            borderRadius: '3px'
        },
        colorHash: {
            marginRight: '10px',
            cursor: 'pointer',
            position: 'relative'
        },
        pop: {
            position: 'absolute',
            padding: '3px',
            borderRadius: '3px',
            background: '#383839',
            color: '#fff',
            fontSize: '11px',
            zIndex: '5000',
            width: '100px',
            top: '-3px',
            left: '90px'
        },
        closeBtn: {
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '3px',
            color: '#383839',
            width: '100%',
            height: '25px',
            cursor: 'pointer'
        }
    }
  }
  trigger() {
    console.log('ColorsModule')
    this.#createTable(qel('body'))
  }

  getRandomColor(){
    return `#${
        'xxxxxx'
        .split('')
        .map(x => x = Math.floor(Math.random()*16).toString(16))
        .join('')
    }`;
  }

  #createTable(point){


      const div = cel('div')
      setStyle(div, this.styles.div)
      div.title = 'Кликните по номеру цвета, чтобы скопировать'

      'colors'.split('').forEach(() => {
          const c = this.getRandomColor()

          const line = cel('div')
          setStyle(line, this.styles.lineDiv)

          const color = cel('div')
          setStyle(color, this.styles.color)
          color.style.background = c

          const colorHash = cel('h3')
          setStyle(colorHash, this.styles.colorHash)
          colorHash.style.color = c
          colorHash.textContent = c
          colorHash.addEventListener('click', e => {
              const {target} = e
              console.log(target.textContent)
              navigator.clipboard.writeText(target.textContent)
              const pop = cel('div')
              setStyle(pop, this.styles.pop)
              pop.textContent = 'Цвет скопирован'
              target.append(pop)
              setTimeout(() => {
                  pop.textContent = ''
                  this.#hide(pop)
              }, 700)
          })



          line.append(color, colorHash)
          div.append(line)
      })

      const closeBtn = cel('button')
          setStyle(closeBtn, this.styles.closeBtn)
          closeBtn.textContent = 'Закрыть'
          closeBtn.addEventListener('click', () => {
              div.innerHTML = ''
              this.#hide(div)
          })

      div.append(closeBtn)

      point.append(div)
  }

  #hide(el){
      el.remove()
  }

}
