import {Module} from '../core/module'
import {random} from '../utils'

export class CustomMessage extends Module {
  constructor(type) {
    //container
    this.customMessageContainer = document.createElement('div')
    this.customMessageContainer.className = 'container-custom-message'
    //messageBlock
    this.customMessageBlock = document.createElement('div')
    this.customMessageBlock.className = 'custom-message'
    //closeElement
    this.closeCustomMessage = document.createElement('button')
    this.closeCustomMessage.className = 'block__btn'
    this.closeCustomMessage.innerHTML = '&times;' 
    //пока не могу понять, как инициадизировать type
    super(type, 'Кастомное сообщение')
  }
    
  trigger() {
    //renderHTML
    this.customMessageBlock.classList.add('show')
    this.customMessageContainer.style.display = 'block'
    //message
    const customMessageText = document.createElement('div')
    customMessageText.className = 'block__message'
    //addRandomMessage
    customMessageText.textContent = this.addMessage()
    //add HTMLelements
    this.customMessageBlock.append(this.closeCustomMessage, customMessageText)
    this.customMessageContainer.append(this.customMessageBlock)
    //Listenner
    this.deleteCustomMessage()

    return this.customMessageContainer
  }
    
  addMessage() {
    //textMessage
    const mockMessages = [
      'Что-то пошло не так..',
      'Добро пожаловать!',
      'Еще увидимся!'
    ]
    return mockMessages[random(0, mockMessages.length - 1)]
    
  }

  deleteCustomMessage() {
    this.closeCustomMessage.addEventListener('click', () => {
      this.customMessageContainer.style.display = 'none'
      setTimeout(() => {
        document.body.remove(this.customMessageContainer)
      }, 3000)
    }
    )
  }
}

