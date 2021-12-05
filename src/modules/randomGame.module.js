import { Module } from '../core/module';
import { Popup } from '../components/popup';
import { random } from '../utils';

export class RandomGameModule extends Module {
    #popup;

    constructor() {
        super('Random Game Module', 'Guess random number');
        this.#popup = new Popup(null, 'Random Game');
    }

    createContent(min, max) {
        const randomNumber = random(0, 10);

        const container = document.createElement('div');

        const text = document.createElement('p');
        text.textContent = `Guess number from ${min} to ${max}`;
        text.className = 'text-gray-700 mb-2';

        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = 'number';
        input.min = min;
        input.max = max;
        input.className = 'ask-timer__input border-2 border-gray-200 p-1 rounded flex-1 outline-none text-gray-700 w-6/12 focus:border-blue-400';

        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'guess';
        submitBtn.className = 'btn rounded bg-blue-400 px-2 py-1 mt-4 hover:bg-blue-300 text-white w-full transition-all';
        submitBtn.addEventListener('click', () => {
            const inputValue = Number(input.value);

            const text = document.createElement('p');
            text.className = 'text-gray-700 text-lg';

            if (inputValue < min || inputValue > max) {
                text.textContent = 'You have entered incorrect number'
                this.#popup.update(text.outerHTML);
                return;
            }

            if (randomNumber === inputValue) {
                text.textContent = `You have guessed number ${randomNumber}`;
                this.#popup.update(text.outerHTML);
            } else {
                text.textContent = `Sorry, you didn\'t guess number ${randomNumber}`;
                this.#popup.update(text.outerHTML);
            }
        });

        container.append(text, input, submitBtn);
        return container;
    }

    trigger() {
        const content = this.createContent(0, 10);
        this.#popup.setContent(content);
        this.#popup.open();
    }
}
