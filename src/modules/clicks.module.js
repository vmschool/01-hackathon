import { Result } from 'postcss';
import { Popup } from '../components/popup';
import { Module } from '../core/module';

export class ClicksModule extends Module {
    #popup;
    #counterClicks;
    #counterDblClicks;

    constructor() {
        super('clickModule', 'Click counter');
        this.#counterClicks = 0;
        this.#counterDblClicks = 0;
    }

    #generateForm() {
        const form = document.createElement('form');
        form.className = 'ask-timer';

        const text = document.createElement('p');
        text.className = 'ask-timer__text';
        text.textContent = 'This is a click counter App. Please fill free to enter number of seconds for timer';

        const inputBox = document.createElement('div');
        inputBox.className = 'ask-timer__input-box';

        const input = document.createElement('input');
        input.className = 'ask-timer__input';
        input.type = 'text';
        input.placeholder = 'Enter number for timer';

        const span = document.createElement('span');
        span.textContent = ' seconds';
        span.className = '.ask-timer__seconds';

        const button = document.createElement('button');
        button.action = 'submit';
        button.className = 'btn';
        button.textContent = 'Confirm';

        inputBox.append(input, span);
        form.append(text, inputBox, button);

        button.addEventListener('click', (event) => {
            event.preventDefault();
            this.#startCounter(+input.value);
        });

        return form;
    }

    #generateResult() {
        const resultBox = document.createElement('div');
        resultBox.className = 'result-box';
        const result1 = document.createElement('p');
        result1.textContent = `Number of clicks: ${this.#counterClicks}`;
        const result2 = document.createElement('p');
        result2.textContent = `Number of double clicks: ${this.#counterDblClicks}`;

        resultBox.append(result1, result2);

        return resultBox;
    }

    #showResult() {
        const result = this.#generateResult();
        this.#popup = new Popup(result, 'Click counter');
        this.#popup.open();
    }

    #clickHandler() {
        this.#counterClicks++;
    }

    #dblClickHandler() {
        this.#counterDblClicks++;
        this.#counterClicks -= 2;
    }

    #startCounter(timer) {
        this.#popup.close();
        document.body.addEventListener('click', this.#clickHandler.bind(this));
        document.body.addEventListener('dblclick', this.#dblClickHandler.bind(this));
        setTimeout(() => {
            document.body.removeEventListener('click', this.#clickHandler);
            document.body.removeEventListener('dblclick', this.#dblClickHandler);
            this.#showResult();
        }, timer * 1000);
    }

    trigger() {
        const form = this.#generateForm();
        this.#popup = new Popup(form, 'Click counter');
        this.#popup.open();
        this.#counterClicks = 0;
        this.#counterDblClicks = 0;
    }
}
