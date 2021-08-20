import {Module} from '../core/module'
import * as utils from '../utils';

export default class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.timer = utils.timer;
    }

    #startProcess() {
        this.intervalId = setInterval(this.#decreaseTimer.bind(this), 1000);
        window.addEventListener('click', utils.counterIncrement);
    }

    #finish() {
        window.removeEventListener('click', utils.counterIncrement);
        clearInterval(this.intervalId);

        // TODO: create utils function which generates object
        const answer = document.createElement('div');
        answer.textContent = String(utils.counter);
        // TODO: create utils function which add generated object to working canvas
        document.body.append(answer);

        //refresh values
        utils.refreshCounter();
        this.timer = utils.timer;
    }

    #decreaseTimer() {
        if (this.timer === 0) {
            this.#finish()
        } else {
            this.timer = this.timer - 1;
        }
    }

    trigger() {
        this.#startProcess();
    }
}
