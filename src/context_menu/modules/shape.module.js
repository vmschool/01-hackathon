import {Module} from '../../core/module';

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    toHTML() {
        return super.toHTML();
    }
    trigger() {
        console.log('123');
    }
}