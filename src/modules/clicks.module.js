import * as utils from '../utils';
import { TimerInterface } from "./timerInterface";

export class ClicksModule extends TimerInterface {
    constructor(type, text) {
        super(type, text);
    }

    startProcess(text) {
        window.addEventListener('click', utils.counterIncrement);
        this.timerControlOn(text);
    }

    #showResult() {
        const result = document.querySelector('.timer-title');
        result.textContent = `Your score is: ${utils.counter}`;
    }

    finishProcess() {
        window.removeEventListener('click', utils.counterIncrement);
        this.timerControlOf();
        this.#showResult();
        utils.refreshCounter();
        setTimeout(() => this.restart(), 3000);
    }

    trigger() {
        this.initiateTimer(this.type, 'Create Timer');
    }
}
