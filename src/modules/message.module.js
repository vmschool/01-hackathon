import { Module } from "../core/module"
import { setStyle, cel, qel, random } from "../utils"

export class MessageModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.massageList = [
      'Привет, как дела!',
      'В 18:00 вынести мусор',
      'Досмотреть уроки по Redux',
      'Не торопись жить, наслаждайся каждым моментом',
      'Позвонить маме',
      'Книга Дэвида Хермана "Сила JavaScript"',
      'Купить Библию',
      'Выучить ещё six english words'
    ]

    this.styles = {
      width:'200px',
      minHeight: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      position: 'fixed',
      top: '5px',
      left: '5px',
      padding: '10px',
      margin: '10px',
      color: '#cd3',
      background: '#fff',
      opacity: '0.8'
    }
  }
  trigger() {
    if(qel('#msg')) {
      alert('Не торопись :)')
      return
    }
    const n = random(0, this.massageList.length - 1)

    const div = cel('div')
    setStyle(div, this.styles)
    div.textContent = this.massageList[n]
    div.id = 'msg';

    const body = qel('body')
    
    body.append(div)
    this.#disapear(3000)
  }
  #disapear(ms){
    setTimeout(() => {
      qel('#msg').remove()
    },ms)
  }
}
