import { Result } from 'postcss';
import { Popup } from '../components/popup';
import { Module } from '../core/module';
import { TimerModule } from './timer.module';

export class ClicksModule extends Module {
    #popup;
    #counterClicks;
    #counterDblClicks;

    constructor() {
        super('clickModule', 'Click counter');
        this.#counterClicks = 0;
        this.#counterDblClicks = 0;
    }

    get counterDblClicks() {
        return this.#counterDblClicks;
    }

    get counterClicks() {
        return this.#counterClicks;
    }

    #generateForm() {
        const form = document.createElement('form');
        form.className = 'ask-timer';

        const text = document.createElement('p');
        text.className = 'ask-timer__text text-gray-700';
        text.textContent = 'This is a click counter App. Please fill free to enter number of seconds for timer';

        const inputBox = document.createElement('div');
        inputBox.className = 'ask-timer__input-box flex items-center mt-3';

        const input = document.createElement('input');
        input.className = 'ask-timer__input border-2 border-gray-200 p-1 rounded flex-1 outline-none text-gray-700 focus:border-blue-400';
        input.type = 'number';
        input.placeholder = 'Enter number for timer';

        const span = document.createElement('span');
        span.textContent = 'seconds';
        span.className = 'ask-timer__seconds flex-1 pl-2 text-gray-700';

        const button = document.createElement('button');
        button.action = 'submit';
        button.className = 'btn rounded bg-blue-400 px-2 py-1 mt-5 hover:bg-blue-300 text-white w-full transition-all';
        button.textContent = 'Confirm';

        inputBox.append(input, span);
        form.append(text, inputBox, button);

        button.addEventListener('click', (event) => {
            event.preventDefault();
            this.#startCounter(+input.value, event);
        });

        return form;
    }

    #generateResult() {
        const resultBox = document.createElement('div');
        resultBox.className = 'result-box text-gray-700';
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

    #clickHandler(event) {
        this.#counterClicks++;
    }

    #dblClickHandler() {
        this.#counterDblClicks++;
        this.#counterClicks -= 2;
    }

    #startCounter(timer, event) {
        this.#popup.close(event);

        const bindedHandler = this.#clickHandler.bind(this);
        const bindedDblHandler = this.#dblClickHandler.bind(this);

        document.body.addEventListener('click', bindedHandler);
        document.body.addEventListener('dblclick', bindedDblHandler);

        const timerModule = new TimerModule();

        timerModule.setRunAfterEnd(() => {
            document.body.removeEventListener('click', bindedHandler);
            document.body.removeEventListener('dblclick', bindedDblHandler);

            this.#showResult();
        });

        timerModule.startTimer(timer);
    }

    trigger() {
        const form = this.#generateForm();
        this.#popup = new Popup(form, 'Click counter');
        this.#popup.open();
        this.#counterClicks = -1;
        this.#counterDblClicks = 0;
    }
}
