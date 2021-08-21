import {Module} from '../core/module'
import { cel, qel, setStyle } from '../utils'

export class TimerModule extends Module {
  constructor(type,text){
    super(type,text)
    this.div = cel('div')
    this.styles = {
      div: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:'250px',
        height: '60px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        position: 'fixed',
        top: '5px',
        left: `${window.innerWidth/2-125}px`,
        padding: '10px',
        margin: '10px',
        color: '#cd3',
        background: '#fff',
        opacity: '0.8'
      },
      input: {
        width: '80px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        color: '#cd3',
        outline: 'none',
        padding: '5px',
        paddingLeft: '10px',
        marginRight: '3px',
        background: '#fff',
        fontSize: '20px',
        fontWeight: 'bold'
      },
      button: {
        width: '65px',
        height: '25px',
        backgroundColor: '#cd3',
        border: '1px solid #cd3',
        borderRadius: '4px',
        color: '#fff',
        cursor: 'pointer',
        marginRight: '3px',
        fontWeight: 'bold'
      }
    }
  }

  trigger() {
    this.#createTimer(qel('body'))
  }

  #createTimer(point){
    if(qel('#tmr')){
      alert('Таймер уже включен!')
      return
    }
    setStyle(this.div, this.styles.div)
    this.div.id = 'tmr'

    const input = cel('input');
    setStyle(input, this.styles.input)
    input.type = 'number'
    input.min = '1'
    input.value = '1'

    const startBtn = cel('button')
    setStyle(startBtn, this.styles.button)
    startBtn.textContent = 'Пуск'
    startBtn.addEventListener('click', () => {this.#startTimer(input)})

    const closeBtn = cel('button')
    setStyle(closeBtn, this.styles.button)
    closeBtn.textContent = 'Закрыть'
    closeBtn.addEventListener('click', () => {this.#closeTimer(this.div)})

    this.div.append(input, startBtn, closeBtn)
    point.append(this.div)
  }

  #startTimer(input){
    let t = parseInt(input.value)
    this.div.innerHTML = ''
    const h3 = cel('h1')
    h3.innerText = t

    const timeCounter = setInterval(() => {
      if(t >= 0){
        h3.innerText = `${t-1}`
      }
      
      t -= 1
      if(t === -1) {
        h3.innerText = 'Время вышло'
      }
      if(t === -5) {
        clearInterval(timeCounter)
        this.#closeTimer(this.div)
      }

    }, 1000)

    this.div.append(h3)
  }

  #closeTimer(el){
    el.innerHTML = ''
    el.remove()
  }

}
