import {Module} from '../core/module'
import {random} from '../utils'

export class CustomMessage extends Module {
  #customMessageContainer
  #blockMap

  constructor(type, text) {
    super(type, text)
    this.#blockMap = [
    {class: 'block--alert', text: 'Что-то пошло не так..'},
    {class: 'block--hello', text: 'Добро пожаловать!'},
    {class: 'block--bye', text: 'Скоро увидимся! Заходи еще!'},
    {class: 'block--lorem', text: 'Lorem ipsum nirum'},
    ]
    this.#customMessageContainer = document.createElement('div')
    this.#customMessageContainer.className = 'container-custom-message'
    this.closeCustomMessage = document.createElement('button')
    this.closeCustomMessage.className = 'custom-close__btn'
    this.closeCustomMessage.innerHTML = '&times;' 
  }
    
  trigger() {
    const isActiveBlock = document.querySelector('.container-custom-message')
    if(isActiveBlock) {
      isActiveBlock.remove()
    }
    this.#customMessageContainer.style.display = 'block'
    const customMessageHTML = this.#generateBlockMessage()
    this.#customMessageContainer.append(customMessageHTML)
    document.body.append(this.#customMessageContainer)
    customMessageHTML.classList.add('custom-animate')
    this.#deleteCustomMessage()
    
    setTimeout(() => {
      this.customMessageContainer.remove()
    },5000)

    return this.customMessageContainer
  }
    
  #generateBlockMessage() {
     //messageBlock
    const customMessageBlock = document.createElement('div')
    customMessageBlock.className = "custom-message"
    customMessageBlock.classList.add('show')
    const randomCustomBlock = this.#blockMap[random(0, this.#blockMap.length -1)]
    customMessageBlock.classList.add(randomCustomBlock.class)
    const customMessageText = document.createElement('div')
    customMessageText.className = 'custom-message__message'
    customMessageText.textContent = randomCustomBlock.text
    customMessageBlock.append(this.closeCustomMessage, customMessageText)
    return customMessageBlock
  }

  #deleteCustomMessage() {
    this.closeCustomMessage.addEventListener('click', () => {
      this.customMessageContainer.remove()
    	}
    )
  }
}

