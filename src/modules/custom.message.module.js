import {Module} from '../core/module'
import {random} from '../utils'

export class CustomMessage extends Module {
  constructor() {
    //container
    this.customMessageContainer = document.createElement('div')
    this.customMessageContainer.className = 'container-message'
    //messageBlock
    this.customMessageBlock = document.createElement('div')
    this.customMessageBlock.className = 'custom-message'
    //closeElement
    this.closeCustomMessage = document.createElement('button')
    this.closeCustomMessage.className = 'block__btn'
    this.closeCustomMessage.innerHTML = '&times;' 
    //пока не могу понять, как инициадизировать type
    super()
  }
    
    

  renderCustomMessage () {
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
    return mockMessages[random(0,2)]
    
  }

  trigger() {
    this.renderCustomMessage()
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

