import { Module } from '../core/module';
import { bgColors } from '../sourceData';
import { random } from '../utils';

export class BackgroundModule extends Module {
    #colors;

    constructor() {
        super('BackgroundModule', 'Background switcher');
        this.body = document.querySelector('body');
        this.#colors = bgColors;
    }

    trigger() {
        this.setColor(this.body);
    }

    setColor(element) {
        let className = this.getRandomColor();
        while (element.className === className) {
            className = this.getRandomColor();
        }
        element.className = '';
        element.classList.add(className);
    }
    getRandomColor() {
        let randomNumber = random(0, this.#colors.length - 1);
        const color = this.#colors[randomNumber];
        randomNumber = random(1, 7);
        const className = `bg-${color}-${randomNumber * 100}`;
        return className;
    }
}
