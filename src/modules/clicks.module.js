import {Module} from '../core/module'
import * as utils from '../utils';
import {createEl, createModal} from "../utils";

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.timer = utils.timer;
    }

    #startProcess() {
        this.intervalId = setInterval(this.#decreaseTimer.bind(this), 1000);
        window.addEventListener('click', utils.counterIncrement);
    }

    #decreaseTimer() {
        console.log('timer: ', this.timer);
        if (this.timer === 0) {
            this.#finish()
        } else {
            this.timer = this.timer - 1;
        }
    }

    #finish() {
        // turning off functionality
        window.removeEventListener('click', utils.counterIncrement);
        clearInterval(this.intervalId);

        // create answer object
        const answer = createEl('div', '', ['modal'] )
        const span = createEl('span', `Количество кликов ${String(utils.counter)}`)
        answer.append(span)
        // show answer
        utils.addObjectToArea(answer);

        //refresh values
        utils.refreshCounter();
        this.timer = utils.timer;
    }

    trigger() {
        this.#startProcess();
    }
}
