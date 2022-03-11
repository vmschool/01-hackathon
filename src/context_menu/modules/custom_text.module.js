import {Module} from '../../core/module';

export class CustomText extends Module {
    constructor(type, text) {
        super(type, text);
    }
    toHTML() {
        return super.toHTML();
    }
}