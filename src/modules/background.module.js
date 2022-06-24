import { Module } from '../core/module'
import { getRandomColor } from '../utils';

export class BackgroundModule extends Module {
    constructor(type, name) {
        super(type, name);
    }

    trigger() {
        const body = document.querySelector('body');
        body.style.backgroundColor = getRandomColor();
    }
}