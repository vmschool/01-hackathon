import {Module} from '../core/module'

export class RandomFigure extends Module {
    #fictureContainer
    #newElement
    #randomColor
    #randomInteger_size
    #randomInteger_width
    #randomInteger_height

    constructor() {
        super('figure', 'Создать фигура');
        this.#fictureContainer = document.querySelector('body');
    }

    #updateForm() {
        this.#newElement = document.createElement('canvas');
        this.#newElement.id = 'canvas';
        this.#fictureContainer.append(this.#newElement);
    }
    #randomInteger(min, max) {
        const rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    #generateColor() {
          return '#' + Math.floor(Math.random()*16777215).toString(16)
    }

    trigger() {
        this.#updateForm();

        this.#randomColor = this.#generateColor();

        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");

        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight;

        this.#randomInteger_size = this.#randomInteger(10, 100);
        this.#randomInteger_width = this.#randomInteger(0, canvas.width - this.#randomInteger_size * 2);
        this.#randomInteger_height = this.#randomInteger(0, canvas.height - this.#randomInteger_size * 2);
        ctx.fillStyle = this.#randomColor;
        ctx.beginPath();
        ctx.arc(this.#randomInteger_size + this.#randomInteger_width, this.#randomInteger_size + this.#randomInteger_height, this.#randomInteger_size, 0, 2 * Math.PI);
        ctx.fill();
    }
}