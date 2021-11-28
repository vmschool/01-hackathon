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

        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = 'number';
        input.min = min;
        input.max = max;

        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'guess';
        submitBtn.addEventListener('click', () => {
            const inputValue = Number(input.value);
            if (inputValue < min || inputValue > max) {
                this.#popup.update('You have entered incorrect number');
                return;
            }

            if (randomNumber === inputValue) {
                this.#popup.update(`You have guessed number ${randomNumber}`);
            } else {
                this.#popup.update(`Sorry, you didn\'t guess number ${randomNumber}`);
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
