import { Module } from '../core/module'
import { randomColor } from '../utils'
import { addZero } from '../utils'
import JS_MEME from '../assets/meme1.jpg'
import { addEventContainer } from '../utils'

export class TimerModule extends Module {
    #timerText
    #minutes
    #seconds
    #color
    #image
    #userInput
    #limitMessage
    #timerSpan
    #eventContainer
    #increaseTimer
    #decreaseTimer
    #confirmButton

    constructor(type, text) {
        super(type, text)
        this.#timerText = document.createElement('span');
        this.#userInput = document.createElement('div');
        this.#minutes;
        this.#seconds;
        this.#color = randomColor();
        this.#image = document.createElement('img');
        this.#limitMessage = document.createElement('span');
        this.#timerSpan = document.createElement('span');
        this.#eventContainer;
        this.#increaseTimer = document.createElement('div');
        this.#decreaseTimer = document.createElement('div');
        this.#confirmButton = document.createElement('div');
    }

    trigger() {
        const hasUserInput = document.querySelector('.user-input');
        if (!this.#eventContainer) {
            addEventContainer(this.type);
            this.#eventContainer = document.querySelector(`.${this.type}`);
        }

        if (!hasUserInput || this.#timerText.textContent === 'time is up') {
            this.#userInput.remove();
            this.#confirmButton.remove();
            this.#confirmButton = document.createElement('div');
            this.#userInput = document.createElement('div');
            this.#renderUserInput();
        }
    }

    #renderUserInput() {
        this.#eventContainer.style.background = `black`;
        this.#userInput.className = 'user-input';
        this.#applyStyles(this.#userInput);

        this.#increaseTimer.className = 'user-button increase';
        this.#increaseTimer.textContent = '+5';
        this.#applyStyles(this.#increaseTimer);

        this.#decreaseTimer.className = 'user-button decrease';
        this.#decreaseTimer.textContent = '-5';
        this.#applyStyles(this.#decreaseTimer)

        this.#timerSpan.className = 'timer-span';
        this.#timerSpan.textContent = '60';

        this.#confirmButton.className = 'user-button confirm';
        this.#confirmButton.textContent = 'Start';

        this.#applyStyles(this.#confirmButton);

        this.#limitMessage.className = 'limit-message';
        this.#limitMessage.classList.add('hidden');
        this.#applyStyles(this.#limitMessage);

        this.#image.className = 'image-meme';
        this.#image.src = JS_MEME;
        this.#image.classList.add('hidden');

        this.#userInput.append(this.#increaseTimer, this.#timerSpan, this.#decreaseTimer, this.#confirmButton);
        this.#eventContainer.append(this.#userInput, this.#image,this.#limitMessage);
        this.#confirmButton.addEventListener('click', () => {
            this.#renderTimer();
            this.#decreaseTime();
        }, "once")

        this.#userInput.addEventListener('click', (event) => {
            const { target } = event;
            const currentTime = Number(this.#timerSpan.textContent);
            if (currentTime === 60 && target.classList.contains("increase")) {
                this.#limitMessage.textContent = 'Это максимальное возможное значение';
                this.#limitMessage.classList.remove('hidden');
            }

            if (currentTime === 5 && target.classList.contains("decrease")) {
                this.#limitMessage.textContent = 'Это минимальное возможное значение';
                this.#limitMessage.classList.remove('hidden');
            }
            if (currentTime >= 5 && currentTime <= 60) {
                if (target.classList.contains("increase") && currentTime != 60) {
                    this.#limitMessage.classList.add('hidden');
                    this.#timerSpan.textContent = currentTime + 5;
                } else if (target.classList.contains("decrease") && currentTime != 5) {
                    this.#limitMessage.classList.add('hidden');
                    this.#timerSpan.textContent = currentTime - 5;
                }
            }
        })
    }

    #renderTimer() {
        this.#userInput.innerHTML = ``;
        this.#limitMessage.classList.add('hidden');

        this.#minutes = 0;
        this.#seconds = this.#timerSpan.textContent;

        this.#timerText.className = 'timer-text';
        this.#timerText.textContent = `${addZero(this.#minutes)}:${addZero(this.#seconds)}`;

        this.#userInput.append(this.#timerText);
    }

    #decreaseTime() {
        this.#image.classList.add('hidden');
        let time = setInterval(() => {
            if (this.#seconds <= 0) {
                clearInterval(time);
                console.log('завершено')
                this.#image.classList.remove('hidden');
                this.#timerText.textContent = 'time is up';
            } else {
                this.#timerText.textContent = `${addZero(this.#minutes)}:${addZero(this.#seconds)}`;
                --this.#seconds;
            }
        }, 1000)
    }

    #applyStyles(element) {
        element.style.border = `1px solid ${this.#color}`;
        element.style.boxShadow = `0 0 2px ${this.#color}, 0 0 10px ${this.#color}`;
        element.style.color = `${this.#color}`;
        element.style.textShadow = `0 0 2px ${this.#color}, 0 0 5px ${this.#color}`;
    }
}