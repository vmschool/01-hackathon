import {Module} from '../core/module'
import {random} from "@/utils";
import {createCross} from '../utils';
import {closeByCross} from '../utils';

export class CallMessageModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  createMessageBlock(span, text, addClass) {
    const cross = createCross();
    cross.style.background = 'none';
    cross.style.border = 'none';
    cross.style.right = '5px';
    cross.style.top = '5px';
    cross.style.width = '15px';
    cross.style.height = '15px';
    const messageContainerHTML = document.createElement('div');
    messageContainerHTML.id = 'message-area';

    const messageSpan = document.createElement('span');
    messageSpan.textContent = `${span}`;
    messageSpan.style.fontWeight = 'bold';
    messageSpan.style.display = 'block';
    messageSpan.style.marginBottom = '5px';

    const messageItemHTML = document.createElement('div');
    messageItemHTML.className = `message-item ${addClass}`;
    messageItemHTML.textContent = text;

    messageItemHTML.prepend(messageSpan)
    messageItemHTML.append(cross)
    messageContainerHTML.append(messageItemHTML)

    return messageContainerHTML;
  }


  close() {
    const crossBtn = document.querySelector('.cross-block');
    crossBtn.addEventListener('click', event => {
      closeByCross('#message-area');
    })
  }

  removeMessageBlock() {
    const messageBlockHTML = document.querySelector('#message-area');
    messageBlockHTML.remove()
  }

  trigger() {
    const menuMessageItem = document.querySelector('[data-type="message-text"]');
      const isMessageBlockHTML = document.querySelector('#message-area');
      if (isMessageBlockHTML) {
        this.removeMessageBlock()
      }
      const messageItemClasses = ['success', 'error', 'info'];
      const messageText = [
        ` cupiditate doloremque dolorum, ea facere itaque labore`,
        ` incidunt non omnis quam quidem quod reiciendis`,
        ` deserunt excepturi minima quo repellendus tempora`
      ];

      let randomNumber = random(1,3);
      const messageBlockHTML = this.createMessageBlock(
        `${(messageItemClasses[randomNumber -1]).toLocaleUpperCase()}:`,
        `${messageText[randomNumber -1]}`, `${messageItemClasses[randomNumber -1]}`
      );

      document.querySelector('#area').append(messageBlockHTML);
      this.close()
  }
}