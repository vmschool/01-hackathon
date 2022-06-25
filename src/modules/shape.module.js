import { Module } from '../core/module';
import { randomShape } from '../assets/shape';
import { addEventContainer } from '../utils';

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    #createFigure() {
        const eventContainer = document.querySelector(`.${this.type}`);
        const svgContainer = document.createElement('div');

        svgContainer.setAttribute('id', 'svg-container');
        svgContainer.className = 'wrapper-svg  exmpl-svg ';
        svgContainer.innerHTML = randomShape();

        return eventContainer.append(svgContainer);
    }

    #toggle() {
        const svgContainer = document.querySelector('#svg-container');

        if (svgContainer) {
            svgContainer.remove();
            this.#createFigure();
        } else {
            this.#createFigure();
        }
    }

    trigger() {
        addEventContainer(this.type);
        this.#toggle();
    }
}