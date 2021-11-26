import { Module } from '../core/module'

export class MessageModule extends Module {

    #message
    #messageBlock
    constructor(message, type, text) {
        super(type, text);
        this.#message = message;

    }
    trigger() {
        try {

            window.addEventListener('click', () => {
                this.#messageBlock = document.createElement('div');
                this.#messageBlock.className = 'message';
                this.#messageBlock.textContent = 'text content';
                const body = document.querySelector('body');
                body.append(this.#messageBlock);
                console.log('click is made');
            });


            const observer = new MutationObserver((body, obs) => {
                const hello = document.querySelector('.message');
                if (hello) {
                    console.log(this.#messageBlock);
                    setTimeout(() => { hello.remove() }, 2000);
                    return;
                }

            });

            observer.observe(document, {
                childList: true,
                subtree: true
            });
            MutationObserver.disconnect();




            //throw new Error(`Trigger method should be implemented in module "${this.type}"`);
        } catch (e) {
            console.log(e.name + ': ' + e.message);
        }
    }

}
