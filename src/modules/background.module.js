import {Module} from '../core/module'
import {random} from '../utils'

export class BackgroundModule extends Module {
    constructor() {
        super('BackgroundModule', 'BackgroundModule');
    }

    trigger() {
        super.trigger();
        const html = document.querySelector('html')
        html.style.background = 'red'
    }

    colorSwitcher() {
        random()
    }

}