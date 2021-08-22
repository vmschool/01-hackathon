import {Module} from '../core/module'
import {random} from '../utils'
import '../css/message.css'

const massageList = [
  'Привет, как дела!',
  'В 18:00 вынести мусор',
  'Досмотреть уроки по Redux',
  'Не торопись жить, наслаждайся каждым моментом',
  'Позвонить маме',
  'Книга Дэвида Хермана "Сила JavaScript"',
  'Купить Библию',
  'Выучить ещё six english words'
]

export class MessageModule extends Module {
  constructor(type = 'message', text = 'Кастомное сообщение') {
    super(type, text)
  }

  trigger() {
    if (document.querySelector('#msg')) {
      alert('Не торопись :)')
      return
    }

    const message$ = document.createElement('div')
    message$.className = 'msg-style'
    message$.textContent = massageList[random(0, massageList.length - 1)]
    message$.id = 'msg'

    document.body.append(message$)
    this.#removeMessage(message$, 3000)
  }

  #removeMessage(message$, ms) {
    setTimeout(() => message$.remove(), ms)
  }
}
