import './timer.css';
import { Module } from '../core/module';
import { Popup } from '../components/popup';
import { doc } from 'prettier';

export class TimerModule extends Module {
    #timeLeft;
    #timerId;

    constructor() {
        super('timerModule', 'Start timer');
        this.#timeLeft = 20;
    }

    startTimer() {
        const timer = this.#createTimer();
        document.body.append(timer);
        this.#countdownTimer();
        this.#timerId = setInterval(this.#countdownTimer.bind(this), 1000);
    }

    setTimeLeft(timeLeft) {
        this.#timeLeft = timeLeft;
    }

    trigger() {
        console.log('Start timer');
        const popup = new Popup(this.#generateForm(), "I'm a super timer, yeah man! =)");
        popup.open();
    }

    #countdownTimer() {
        const minutes = this.#timeLeft > 0 ? Math.floor(this.#timeLeft / 60) : 0;
        const seconds = this.#timeLeft > 0 ? this.#timeLeft % 60 : 0;

        const minutesHTML = document.querySelector('.timer__minutes');
        const secondsHTML = document.querySelector('.timer__seconds');
        minutesHTML.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsHTML.textContent = seconds < 10 ? '0' + seconds : seconds;

        minutesHTML.dataset.title = this.#declensionNum(minutes, ['минута', 'минуты', 'минут']);
        secondsHTML.dataset.title = this.#declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

        // console.log(this.#timeLeft);
        if (this.#timeLeft < 0) {
            clearInterval(this.#timerId);
            document.querySelector('.timer__items').textContent = 'Time is up!';
        }
        this.#timeLeft--;
    }

    #declensionNum(num, words) {
        return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
    }

    #generateForm() {
        const form = document.createElement('form');
        form.className = 'timer';

        const text = document.createElement('p');
        text.className = 'timer__text';
        text.textContent = 'How much time do you need?';

        const inputBox = document.createElement('div');
        inputBox.className = 'timer__input-box';

        const input = document.createElement('input');
        input.className = 'timer__input';
        input.name = 'timeleft';
        input.type = 'number';
        input.value = '0';
        input.min = '0';

        const span = document.createElement('span');
        span.textContent = ' seconds';
        span.className = '.timer__seconds';

        const button = document.createElement('button');
        button.type = 'submit';
        button.className = 'btn';
        button.textContent = 'Start';

        inputBox.append(input, span);
        form.append(text, inputBox, button);

        button.addEventListener('click', (event) => {
            event.preventDefault();
            this.setTimeLeft(+input.value);
            // console.log(this.#timeLeft);

            document.querySelector('.overlay')?.remove();
            this.startTimer();
            setTimeout(() => {
                console.log('end');
                document.querySelector('.timer__items')?.remove();
            }, this.#timeLeft * 1000 + 3500);
        });

        return form;
    }

    #createTimer() {
        const container = document.createElement('div');
        container.className = 'timer__items';

        const itemMinutes = document.createElement('div');
        itemMinutes.className = 'timer__item timer__minutes';

        const itemSeconds = document.createElement('div');
        itemSeconds.className = 'timer__item timer__seconds';
        container.append(itemMinutes, itemSeconds);
        return container;
    }
}
