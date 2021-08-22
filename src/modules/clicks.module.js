import { counter, counterIncrement, refreshCounter} from '../utils';
import { TimerInterface } from "./timerInterface";

export default class ClicksModule extends TimerInterface {
    constructor(type, text) {
        super(type, text);
    }

    startProcess(text) {
        window.addEventListener('click', counterIncrement);
        this.timerControlOn(text);
    }

    static #showResult() {
        const result = document.querySelector('.timer-title');
        result.textContent = `Your score is: ${counter}`;
    }

    finishProcess() {
        window.removeEventListener('click', counterIncrement);
        this.timerControlOf();
        ClicksModule.#showResult();
        refreshCounter();
        setTimeout(() => this.restart(), 3000);
    }

    trigger() {
        this.initiateTimer(this.type, 'Create Clicker Timer');
    }
}
