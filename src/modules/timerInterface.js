import {Module} from '../core/module'
import * as utils from '../utils';

export class TimerInterface extends Module {
    #input; #titleField; #startButton; #restartButton; #modalName;
    constructor(type, text) {
        super(type, text);
    }

    startProcess() {
        console.log(`startProcess method should be implemented in module "${this.type}"`);
    }

    finishProcess() {
        console.log(`finishProcess method should be implemented in module "${this.type}"`)
    }

    #createRestartButton() {
        this.#restartButton = document.createElement("button");
        this.#restartButton.classList.add("timer_start-button");
        this.#restartButton.value = 'Restart';
        this.#restartButton.textContent = 'Restart';
        this.#restartButton.addEventListener("click", (event) => {
            this.#timerSettings();
        });
        this.wrapper.append(this.#restartButton);
    }

    #clearWrapperField() {
        if (this.#startButton) {
            this.#startButton.remove();
        }
        if (this.#titleField) {
            this.#titleField.remove();
        }
        if (this.#restartButton) {
            this.#restartButton.remove();
        }
    }

    restart() {
        this.#clearWrapperField();
        this.#generateTitle('Want to restart?');
        this.#createRestartButton();
    }

    #prettyTime(timeLeft) {
        let part1 = '';
        let part2 = '';
        if (timeLeft > 60) {
            const minutes = Math.round(timeLeft / 60);
            part1 = minutes < 10 ? `0${minutes}:` : `${minutes}`;
            timeLeft = timeLeft - minutes * 60;
        }
        if (timeLeft > 0) {
            part2 = timeLeft < 10 ? `0${timeLeft}` : `${timeLeft}`;
        }
        return `${part1}${part2} time left`;
    }

    timerControlOn(titleField) {
        titleField.textContent = `${this.#prettyTime(this.time)}`;
        this.time--;
        this.intervalId = setInterval(() => this.timeDecrease(titleField), 1000);
    }

    timerControlOf() {
        clearInterval(this.intervalId);
        new Audio('http://www.yogatech.com/apps/livehelp/bin/staff/sound/ringring.wav').play()
            .then()
            .catch(err => console.error(err));
    }

    timeDecrease(text) {
        if (!document.querySelector(`#${this.#modalName}`)) {
            this.timerControlOf();
            return;
        }
        text.textContent = `${this.#prettyTime(this.time)}`;
        if (this.time === 0) {
            this.finishProcess();
        }
        console.log(this.time);
        this.time--;
    }

    #generateTitle(title) {
        this.#titleField = document.createElement("h3");
        this.#titleField.classList.add("timer-title");
        this.#titleField.textContent = title;
        this.wrapper.append(this.#titleField);
    }

    #timerSettings() {
        this.#clearWrapperField();
        this.#generateTitle('Create Timer');
        this.#generateInputField();
        this.#generateStartButton();
    }

    #generateStartButton() {
        this.#startButton = document.createElement("button");
        this.#startButton.classList.add("timer_start-button");
        this.#startButton.value = "Start";
        this.#startButton.textContent = "Start";
        this.wrapper.append(this.#startButton);

        this.#startButton.addEventListener("click", (event) => {
            this.time = Number(this.#input.value);
            this.#input.remove();
            event.target.remove();

            this.startProcess(this.#titleField);
        });
    }

    #generateInputField() {
        this.#input = document.createElement("input");
        this.#input.className = "timer-input";
        this.#input.type = "number";
        this.#input.setAttribute("min", "1");
        this.#input.setAttribute("max", "999");
        this.#input.setAttribute("step", "1");
        this.#input.setAttribute("value", "1");
        this.wrapper.append(this.#input);
    }

    initiateTimer(modalName, title) {
        this.#modalName = modalName;
        this.area = utils.getArea();
        if (!document.querySelector(`#${modalName}`)) {
            this.wrapper = utils.createModal(modalName);
        }
        this.#timerSettings();
        this.area.append(this.wrapper);
    }
}
