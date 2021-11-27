import { Module } from '../core/module';
import { random } from '../utils';

export class MessageModule extends Module {

    static #messagesArray = ['Have a nice weekend!', 'Happy Thanksgiving Day!', 'All the leaves are brown)', 'Id be safe and warm'];

    constructor(type, text) {
        super(type, text);
    };

    trigger() {
        try {
            const body = document.querySelector('body');
            const messageBlock = this.createMessageElement();
            body.append(messageBlock);
            const messageTimeout = setTimeout(() => {
                if (messageBlock) {
                    messageBlock.remove();
                }
            }, 2000);
            clearTimeout(messageTimeout);
        } catch (e) {
            console.log(e.name + ': ' + e.message);
        }
    };
    createMessageElement() {
        const randomIndex = random(0, MessageModule.#messagesArray.length - 1);
        const messageBlock = document.createElement('div');
        messageBlock.className = 'message';
        messageBlock.textContent = MessageModule.#messagesArray[randomIndex];
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        const randomTop = random(0, winHeight - 100);
        const randomLeft = random(0, winWidth - 100);

        messageBlock.style.top = randomTop + 'px';
        messageBlock.style.left = randomLeft + 'px';

        return messageBlock;
    }
}
