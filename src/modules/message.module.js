import { Module } from '../core/module';
import { random } from '../utils';

export class MessageModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    if (!document.querySelector('.message-box')) {
      let sec = random(1, 15);
      const messageContainer = document.createElement('div');
      messageContainer.classList.add('message-box');
      messageContainer.textContent = `Я сообщение. Удалюсь через ${sec} секунд(ы)`;

      document.body.append(messageContainer);

      const interval = setInterval(() => {
        sec -= 1;
        messageContainer.textContent = `Я сообщение. Удалюсь через ${sec} секунд(ы)`;
      }, 1000);

      setTimeout(() => {
        messageContainer.remove();
        clearInterval(interval);
      }, sec * 1000);
    }
  }
}
