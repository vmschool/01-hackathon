import {Module} from '@/core/module';
import * as UTILS from "@/core/utils";

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    toHTML() {
        return super.toHTML();
    }
    trigger() {
        UTILS.counter = 0;
        UTILS.menu.addEventListener('click', event => {
            const { target } = event;
            if (target.dataset.type === 'clickModule') {

            }
        })
    }
}