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

    constructor(type, text) {
        super(type, text)
        this.#timerWindow = document.createElement('div');
        this.#timerText = document.createElement('span');
        this.#userInput = document.createElement('div');
        this.#minutes;
        this.#seconds;
        this.#color = randomColor();
        this.#image = document.createElement('img');
    }

    trigger() {
        this.#renderUserInput();
        // const eventContainer = document.querySelector(`.${this.type}`);
        // if (!eventContainer) {
        // addEventContainer(this.type);
        // this.#render();
        // this.#decreaseTime();
        // }
        // addEventContainer();
        // this.#renderUserInput();
        // if (this.#timerText.textContent === 'time is up') {
        //     this.#decreaseTime();
        // }
    }

    #render() {
        addEventContainer(this.type);
        const eventContainer = document.querySelector(`.${this.type}`);
        console.log(eventContainer);
        eventContainer.style.background = `black`;

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
        eventContainer.append(this.#timerWindow, this.#image);
    }

    #decreaseTime() {
        this.#image.classList.add('hidden');
        this.#seconds = '5';
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
        addEventContainer();
        let eventContainer = document.querySelector(`.${this.type}`);
        if (!eventContainer) {
            addEventContainer(this.type);
            eventContainer = document.querySelector(`.${this.type}`);
        }
        this.#userInput.className = 'user-input';


        const increaseTimer = document.createElement('div');
        increaseTimer.className = 'increase';
        increaseTimer.classList.add('user-button');
        increaseTimer.textContent = '+5';

        const decreaseTimer = document.createElement('div');
        decreaseTimer.className = 'user-button decrease';
        decreaseTimer.textContent = '-5';

        const timerSpan = document.createElement('span');
        timerSpan.className = 'timer-span';
        timerSpan.textContent = '60';

        this.#userInput.addEventListener('click', (event) => {
            const { target } = event;
            if (target.classList.contains("increase")) {
                console.log(target.className)
            }
        })
        this.#userInput.append(increaseTimer, timerSpan, decreaseTimer);
        eventContainer.append(this.#userInput);
        console.log(eventContainer)


    }

    #renderInputElement() {

    }
}