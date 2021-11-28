import { Module } from '../../core/module';
import { random } from '../../utils';
import './message.css';

export class MessageModule extends Module {

    static #messagesArray = ['Have a nice weekend!', 'Happy Thanksgiving Day!', 'All the leaves are brown)', 'Id be safe and warm'];
    static TYPE = 'MessageModule';
    static TEXT = 'Показать сообщение';

    constructor() {
        super(MessageModule.TYPE, MessageModule.TEXT);
    }

    trigger() {
        const messageBlock = this.createMessageElement();
        document.body.append(messageBlock);
        const messageTimeout = setTimeout(() => {
            messageBlock.remove();
            clearTimeout(messageTimeout);
        }, 3000);
    };

    createMessageElement() {
        const randomIndex = random(0, MessageModule.#messagesArray.length - 1);
        const messageBlock = document.createElement('div');
        messageBlock.className = 'message';
        messageBlock.textContent = MessageModule.#messagesArray[randomIndex];
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        const randomTop = random(0, winHeight - 66);
        const randomLeft = random(0, winWidth - 150);

        messageBlock.style.top = randomTop + 'px';
        messageBlock.style.left = randomLeft + 'px';

        return messageBlock;
    };
};
