import { Module } from '../core/module'
import { random } from '../utils';

export class BackgroundModule extends Module {
    constructor() {
        super('background', 'Изменить фон')
    }
    trigger() {
        const background = document.querySelector('body');
        background.style.backgroundColor = `RGB(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
    }
}
