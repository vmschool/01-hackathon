import { Module } from '../core/module'
import { randomColor } from '../utils'
import { addZero } from '../utils'
import JS_MEME from '../assets/meme1.jpg'

export class TimerModule extends Module {
    #timerWindow
    #timerText
    #minutes
    #seconds
    #color
    #image

    constructor(type, text) {
        super(type, text)
        this.#timerWindow = document.createElement('div');
        this.#timerText = document.createElement('span');
        this.#minutes = '0';
        this.#seconds;
        this.#color = randomColor();
        this.#image= document.createElement('img');
    }

    trigger() {
        const hasTimerWindow = document.querySelector('.timer-window');
        if (!hasTimerWindow) {
            this.#render();
            this.#decreaseTime();
        }
    }

    #render() {
        this.#seconds = '5';
        
        const eventContainer = document.querySelector('.event-container');
        eventContainer.style.background = `black`;
        this.#timerWindow.className = 'timer-window';
        this.#timerWindow.style.border = `1px solid ${this.#color}`;
        this.#timerWindow.style.boxShadow = `0 0 2px ${this.#color}, 0 0 10px ${this.#color}`

        this.#timerText.className = 'timer-text';
        this.#timerText.textContent = `${addZero(this.#minutes)}:${addZero(this.#seconds)}`;
        this.#timerText.style.color = `${this.#color}`;
        this.#timerText.style.textShadow = `0 0 2px ${this.#color}, 0 0 5px ${this.#color}`;

        this.#image.className = 'image-meme';
        this.#image.classList.add('hidden');
        this.#image.src = JS_MEME;   

        this.#timerWindow.append(this.#timerText);
        eventContainer.append(this.#timerWindow, this.#image);
    }

    #decreaseTime() {
        let time = setInterval(() => {
            --this.#seconds;
            if(this.#seconds<=0){
                clearInterval(time);
                console.log('завершено')
                this.#image.classList.remove('hidden');
                this.#timerText.textContent = 'time is up';
            } else {
                this.#timerText.textContent = `${addZero(this.#minutes)}:${addZero(this.#seconds)}`
            }
        }, 1000)
    }
}