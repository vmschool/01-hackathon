import { Module } from '../core/module';

export class BackgroundModule extends Module {
    constructor() {
        super('backgroundModule', 'Change color');
    }

    trigger() {
        document.body.style.backgroundColor = 'orangered';
    }
}
