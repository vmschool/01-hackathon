import { Module } from '../core/module'
import { randomColor } from '../utils'
import { addZero } from '../utils'
import JS_MEME from '../assets/meme1.jpg'
import { addEventContainer } from '../utils'

export class TimerModule extends Module {
    #timerWindow
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
        this.#timerWindow = document.createElement('div');
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
        this.#eventContainer = document.querySelector(`.${this.type}`)
        if (!this.#eventContainer) {
            addEventContainer(this.type);
            this.#eventContainer = document.querySelector(`.${this.type}`)
            // console.log(this.#eventContainer)
            // this.#renderUserInput();
            // this.#renderTimer();
            // this.#decreaseTime();
        }
        this.#renderUserInput();
    }

    #renderTimer() {
        this.#userInput.style.display = 'none';    

        this.#minutes = 0;
        this.#seconds = this.#timerSpan.textContent;
        this.#eventContainer.style.background = `black`;

        this.#timerWindow.className = 'timer-window';
        this.#timerWindow.style.border = `1px solid ${this.#color}`;
        this.#timerWindow.style.boxShadow = `0 0 2px ${this.#color}, 0 0 10px ${this.#color}`

        this.#timerText.className = 'timer-text';
        this.#timerText.textContent = `${addZero(this.#minutes)}:${addZero(this.#seconds)}`;
        this.#timerText.style.color = `${this.#color}`;
        this.#timerText.style.textShadow = `0 0 2px ${this.#color}, 0 0 5px ${this.#color}`;

        this.#image.className = 'image-meme';
        this.#image.src = JS_MEME;

        this.#timerWindow.append(this.#timerText);
        this.#eventContainer.append(this.#timerWindow, this.#image);
        this.#decreaseTime();
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

    #renderUserInput() {
        this.#userInput.className = 'user-input';
        this.#applySytles(this.#userInput);

        this.#increaseTimer.className = 'user-button increase';
        this.#increaseTimer.textContent = '+5';
        this.#applySytles(this.#increaseTimer);

        this.#decreaseTimer.className = 'user-button decrease';
        this.#decreaseTimer.textContent = '-5';
        this.#applySytles(this.#decreaseTimer)

        this.#timerSpan.className = 'timer-span';
        this.#timerSpan.textContent = '60';

        this.#confirmButton.className = 'user-button confirm';
        this.#confirmButton.textContent = 'Start';
        this.#applySytles(this.#confirmButton);

        this.#limitMessage.className = 'limit-message';


        this.#userInput.append(this.#increaseTimer, this.#timerSpan, this.#decreaseTimer, this.#confirmButton);
        this.#eventContainer.append(this.#userInput);

        this.#userInput.addEventListener('click', (event) => {
            const { target } = event;
            const currentTime = Number(this.#timerSpan.textContent);
            if (currentTime === 60 && target.classList.contains("increase")) {
                this.#renderLimitMessage();
            }
            if (currentTime === 0 && target.classList.contains("decrease")) {
                this.#renderLimitMessage();
            }
            if (currentTime >= 0 && currentTime <= 60) {
                if (target.classList.contains("increase") && currentTime != 60) {
                    this.#timerSpan.textContent = currentTime + 5;
                } else if (target.classList.contains("decrease") && currentTime != 0) {
                    this.#timerSpan.textContent = currentTime - 5;
                }
            }
            if (target.classList.contains('confirm')) {
                this.#renderTimer();
            }
        })
    }

    #renderLimitMessage() {
        let info = '';
        if (this.#timerSpan.textContent === "60") {
            info = 'Это максимальное возможное значение';
        }
        if (this.#timerSpan.textContent === "0") {
            info = 'Это минимальное возможное значение';
        }
        this.#limitMessage.textContent = info;
        this.#eventContainer.append(this.#limitMessage);
    }
    #renderInputElement() {

    }

    #applySytles(element) {
        element.style.border = `1px solid ${this.#color}`;
        element.style.boxShadow = `0 0 2px ${this.#color}, 0 0 10px ${this.#color}`;
        element.style.color = `${this.#color}`;
        element.style.textShadow = `0 0 2px ${this.#color}, 0 0 5px ${this.#color}`;
    }
}