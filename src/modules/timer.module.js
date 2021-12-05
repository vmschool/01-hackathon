import { Module } from '../core/module';
import { Popup } from '../components/popup';

export class TimerModule extends Module {
    #timeLeft;
    #timerId;
    #runAfterEnd;

    constructor() {
        super('timerModule', 'Start timer');
        this.#timeLeft = 10;
        this.#runAfterEnd = null;
    }

    startTimer(time) {
        if (document.querySelector('.timer__items')) {
            this.#generateWarn('The timer has already started!');
            return;
        } else if (time <= 0) {
            this.#generateWarn('Time parameter must be above zero');
            return;
        } else if (time > 3600) {
            this.#generateWarn('Maximum time value - 60 min (3600 sec)');
            return;
        }

        this.setTimeLeft(time);
        const timer = this.#createTimer();
        document.body.append(timer);
        this.#countdownTimer();
        this.#timerId = setInterval(this.#countdownTimer.bind(this), 1000);
    }

    setTimeLeft(timeLeft) {
        this.#timeLeft = timeLeft;
    }

    trigger() {
        const popup = new Popup(this.#generateForm(), "I'm a super timer, yeah man! =)");
        popup.open();
    }

    #generateWarn(message) {
        const warn = document.createElement('p');
        warn.textContent = message;
        const popup = new Popup(warn, 'WARNING');
        popup.open();
    }

    #countdownTimer() {
        const minutes = this.#timeLeft > 0 ? Math.floor(this.#timeLeft / 60) : 0;
        const seconds = this.#timeLeft > 0 ? this.#timeLeft % 60 : 0;

        const minutesHTML = document.querySelector('.timer__minutes');
        const secondsHTML = document.querySelector('.timer__seconds');
        minutesHTML.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsHTML.textContent = seconds < 10 ? '0' + seconds : seconds;

        minutesHTML.dataset.title = minutes === 1 ? 'minute' : 'minutes';
        secondsHTML.dataset.title = seconds === 1 ? 'second' : 'seconds';

        // console.log(this.#timeLeft);
        if (this.#timeLeft < 0) {
            clearInterval(this.#timerId);
            const timerItems = document.querySelector('.timer__items');
            timerItems.textContent = 'Time is up!';
            setTimeout(() => {
                timerItems.remove();
            }, 1500);
            this.#runAfterEnd?.();
        }

        this.#timeLeft--;
    }

    setRunAfterEnd(func) {
        this.#runAfterEnd = func;
    }

    #generateForm() {
        const form = document.createElement('form');
        form.className = 'ask-timer';

        const text = document.createElement('p');
        text.className = 'ask-timer__text text-gray-700';
        text.textContent = 'How much time do you need?';

        const inputBox = document.createElement('div');
        inputBox.className = 'ask-timer__input-box flex items-center mt-2';

        const input = document.createElement('input');
        input.className =
            'ask-timer__input border-2 border-gray-200 p-1 rounded flex-1 outline-none text-gray-700 focus:border-blue-400';
        input.name = 'timeleft';
        input.type = 'number';
        input.value = '0';
        input.min = '0';

        const span = document.createElement('span');
        span.textContent = ' seconds';
        span.className = 'ask-timer__seconds flex-1 pl-2 text-gray-700';

        const button = document.createElement('button');
        button.type = 'submit';
        button.className = 'btn rounded bg-blue-400 px-2 py-1 mt-4 hover:bg-blue-300 text-white w-full transition-all';
        button.textContent = 'Start';

        inputBox.append(input, span);
        form.append(text, inputBox, button);

        button.addEventListener('click', (event) => {
            event.preventDefault();
            const time = +input.value;

            document.querySelector('.overlay')?.remove();
            this.startTimer(time);
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
