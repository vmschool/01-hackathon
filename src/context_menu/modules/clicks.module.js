import {Module} from '@/core/module';
import * as UTILS from "@/core/utils";
import {time} from "@/core/utils";

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    toHTML() {
        return super.toHTML();
    }
    trigger() {
        const clickModalItem = document.querySelector("[data-type = 'clickModule']");
        console.log('12312312')
        UTILS.counter = 0;
        this.startTimer()
        this.decreaseTimer()
        this.setTime()

        clickModalItem.addEventListener('click', () => {
                this.render(`Анализ кликов. Счет: ${UTILS.counter}`)

        })

    }
    startTimer () {
        setInterval(this.decreaseTimer, 1000);
        this.setTime(time);
    }
    decreaseTimer () {
        if (UTILS.time === 0) {

        } else {
            let currentTime = --UTILS.time;
            if (currentTime < 10) {
                currentTime = `0${currentTime}`;
            }
            this.setTime();
        }
    }
    setTime (value) {
        console.log(value)
    }
    render (title, input, text) {

    }

}