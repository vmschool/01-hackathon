import { Module } from '../core/module';
import { randomShape } from '../assets/shape';
import { addEventContainer } from '../utils';
import { random } from '../utils';

export class ShapeModule extends Module {
    #body
    #width
    #height
    constructor(type, text) {
        super(type, text)
        this.#body = document.querySelector('body');
        this.#width = document.documentElement.clientWidth;
        this.#height = document.documentElement.clientHeight;
    }

    #createFigure() {

        const eventContainer = this.#body.querySelector(`.${this.type}`);
        const svgContainer = document.createElement('div');

        svgContainer.setAttribute('id', 'svg-container');
        svgContainer.className = 'wrapper-svg  exmpl-svg ';
        svgContainer.innerHTML = randomShape();
        svgContainer.style.left = `${random(30, this.#width - 190)}px`;
        svgContainer.style.top = `${random(30, this.#height - 190)}px`;
        
        return eventContainer.append(svgContainer);
    }

    #autoRemove() {
        const eventContainer = this.#body.querySelector(`.${this.type}`);
        setTimeout(() => {
            eventContainer.remove();
        }, 4000)
    }

    #showFugure() {
        const svgContainer = this.#body.querySelector('#svg-container');
        if (svgContainer) {
            svgContainer.remove();
            this.#createFigure();
        } else {
            this.#createFigure();
        }
    }

    trigger() {
        addEventContainer(this.type);
        this.#showFugure();
        this.#autoRemove();
    }
}