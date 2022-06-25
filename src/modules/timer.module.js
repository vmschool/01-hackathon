import { Module } from '../core/module'
import { randomColor } from '../utils'
import { addZero } from '../utils'

export class TimerModule extends Module {
    #timerWindow
    #timerText
    #minutes
    #seconds
    #color

    constructor(type, text) {
        super(type, text)
        this.#timerWindow = document.createElement('div');
        this.#timerText = document.createElement('span');
        this.#minutes = '0';
        this.#seconds = '5';
        this.#color = randomColor();
    }

    trigger() {
        const hasTimerWindow = document.querySelector('.timer-window');
        if (!hasTimerWindow) {
            this.#render();
            this.#decreaseTime();
        } 

    }

    #render() {
            this.#timerWindow.className = 'timer-window';
            this.#timerWindow.style.border = `1px solid ${this.#color}`;
            this.#timerWindow.style.boxShadow = `0 0 2px ${this.#color}, 0 0 10px ${this.#color}`

            this.#timerText.className = 'timer-text';
            this.#timerText.textContent = `${addZero(this.#minutes)}:${addZero(this.#seconds)}`;
            this.#timerText.style.color = `${this.#color}`;
            this.#timerText.style.textShadow = `0 0 2px ${this.#color}, 0 0 5px ${this.#color}`;

            this.#timerWindow.append(this.#timerText);
            document.body.append(this.#timerWindow);

    }

    #decreaseTime() {
        let time;
        time = setInterval(() => {
            this.#timerText.textContent = this.#setTime();
        }, 1000)
    }

    #setTime() {
        if (this.#seconds === 0) {
            clearInterval(8);
            console.log("конец");
            return 'time is up';
        } else {
            let current = --this.#seconds;
            return `${addZero(this.#minutes)}:${addZero(current)}`;
        }
    }
}