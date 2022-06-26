import { Module } from '../core/module'
import { random, getRandomPositionForElement, getRandomColor } from "../utils";

export class FigureModule extends Module {
    #typesNumber;
    #removeElementEvent;

    constructor(type, text) {
        super(type, text);
        this.el = document.createElement('div');
        this.el.className = 'figure-container';
        this.el.style.display = 'inline';
        this.el.style.position = 'fixed';
        this.#typesNumber = 7
        this.#removeElementEvent = (event) => {
            event.target.parentNode.removeChild(event.target);
        }
    }


    trigger() {
        for (const child of this.el.childNodes) {
            child.parentNode.removeChild(child);
        }
        const figureNumber = random(1, this.#typesNumber);
        let size, width, height, pos;
        switch (figureNumber) {
            // square
            case 1:
                size = random(30, 200);
                const square = document.createElement('div');
                square.setAttribute('style',
                `width: ${size}px;
                height: ${size}px;
                background: ${getRandomColor()};`)
                square.addEventListener('click', this.#removeElementEvent);
                this.el.append(square);

                pos = getRandomPositionForElement(size + 40, size + 40);
                this.el.style.left = `${pos.x + 20}px`;
                this.el.style.top = `${pos.y + 20}px`;
                break;
            // rectangle
            case 2:
                width = random(30, 200);
                height = random(30, 200);
                const rectangle = document.createElement('div');
                rectangle.setAttribute('style',
                `width: ${width}px;
                height: ${height}px;
                background: ${getRandomColor()};`)
                rectangle.addEventListener('click', this.#removeElementEvent);
                this.el.append(rectangle);

                pos = getRandomPositionForElement(width + 40, height + 40);
                this.el.style.left = `${pos.x + 20}px`;
                this.el.style.top = `${pos.y + 20}px`;
                break;
            // circle
            case 3:
                size = random(30, 200);
                const circle = document.createElement('div');
                circle.setAttribute('style',
                `width: ${size}px;
                height: ${size}px;
                background: ${getRandomColor()};
                border-radius: 50%;`)
                circle.addEventListener('click', this.#removeElementEvent);
                this.el.append(circle);

                pos = getRandomPositionForElement(size + 40, size + 40);
                this.el.style.left = `${pos.x + 20}px`;
                this.el.style.top = `${pos.y + 20}px`;
                break;
            // oval
            case 4:
                width = random(30, 200);
                height = random(30, 200);
                const oval = document.createElement('div');
                oval.setAttribute('style',
                `width: ${width}px;
                height: ${height}px;
                background: ${getRandomColor()};
                border-radius: 50%;`)
                oval.addEventListener('click', this.#removeElementEvent);
                this.el.append(oval);

                pos = getRandomPositionForElement(width + 40, height + 40);
                this.el.style.left = `${pos.x + 20}px`;
                this.el.style.top = `${pos.y + 20}px`;
                break;
            // triangle
            case 5:
                size = random(30, 200);
                const triangle = document.createElement('div');
                const ratio = Math.random();
                triangle.setAttribute('style',
                `width: 0px;
                height: 0px;
                border-left: ${size - ratio * size}px solid transparent;
                border-right: ${size - (size - ratio * size)}px solid transparent;
                border-bottom: ${size * 0.75}px solid ${getRandomColor()};
                transform: rotate(${random(-60, 60)}deg);`)
                triangle.addEventListener('click', this.#removeElementEvent);
                this.el.append(triangle);

                pos = getRandomPositionForElement(size + 40, size + 40);
                this.el.style.left = `${pos.x + 20}px`;
                this.el.style.top = `${pos.y + 20}px`;
                break;
            // parallelogram
            case 6:
                size = random(30, 200);
                const parallelogram = document.createElement('div');
                parallelogram.setAttribute('style',
                `width: ${size}px;
                height: ${size * 0.75}px;
                background: ${getRandomColor()};
                transform: skew(${random(5,45)}deg);
                margin-left: ${size * 0.5}px;`)
                parallelogram.addEventListener('click', this.#removeElementEvent);
                this.el.append(parallelogram);

                pos = getRandomPositionForElement(size * 1.5 + 40, size * 0.75 + 40);
                this.el.style.left = `${pos.x + 20}px`;
                this.el.style.top = `${pos.y + 20}px`;
                break;
            // trapezoid
            case 7:
                size = random(30, 200);
                const trapezoid = document.createElement('div');
                trapezoid.setAttribute('style',
                `width: ${size}px;
                height: 0px;
                border-bottom: ${size / 2}px solid ${getRandomColor()};
                border-left: ${size / 4}px solid transparent;
                border-right: ${size / 4}px solid transparent;`)
                trapezoid.addEventListener('click', this.#removeElementEvent);
                this.el.append(trapezoid);

                pos = getRandomPositionForElement(size + 40, size + 40);
                this.el.style.left = `${pos.x + 20}px`;
                this.el.style.top = `${pos.y + 20}px`;
                break;

        }

        document.body.append(this.el);
    }
}