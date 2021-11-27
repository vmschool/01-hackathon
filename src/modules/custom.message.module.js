import {Module} from '../core/module'
import {random} from '../utils'

export class CustomMessage extends Module {
  constructor() {
    this.customMessageContainer = document.createElement('div')
    this.customMessageContainer.className = 'custom-message-block'
    this.customMessageBlock = document.createElement('div')
    this.customMessageBlock.className = 'custom-message'
  }

  renderCustomMessage () {
    const customMessageText = document.createElement('span')
    customMessageText.className = 'custom-message-text'
    customMessageText.innerHTML = this.addMessage()
    this.customMessageBlock.append(customMessageText)
    this.deleteCustomMessage()
    return this.customMessageBlock
  }

  addMessage() {
    const mockMessages = [
      'Что-то пошло не так..',
      'Добро пожаловать!',
      'Еще увидимся!'
    ]
    return mockMessages[Utils.random(0,2)]
    
  }

  trigger() {
    //this.messages = mockMessages
    this.renderCustomMessage()
  }

  deleteCustomMessage() {
    setTimeout(() => {
      this.customMessageContainer.remove('custom-message-block')
    }, 4000)
  }

}

