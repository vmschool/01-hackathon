import {Module} from '../core/module'

export default class TimerModule extends Module {

    constructor(text) {
        super('Timer', text);
    }

    trigger() {
        console.log('Timer triggered');


        const timer = document.createElement('div');
        timer.className = 'timer_container';

        const button = document.createElement('button');
        button.className = 'button_start';
        button.textContent = 'запустить';

        let inputHTML = `
<input class="timer_input_hours" name="hours" type="number" max="59" min="0">
<input class="timer_input_min" name="minutes" type="number" max="59" min="0">
<input class="timer_input_sec" name="seconds" type="number" max="59" min="0">`;

        let timeCountdownContainerHTML = `
<div class="time_countdown_container">
    <p id="timer">
        <span id="timer-hours"></span>
        <span id="timer-mins"></span>
        <span id="timer-secs"></span>
    </p>
</div>`;

        timer.innerHTML = inputHTML;
        timer.append(button);
        document.body.append(timer);

        button.addEventListener('click', (event) => {
            let timerInputSec = document.querySelector('.timer_input_sec');
            let timerInputMin = document.querySelector('.timer_input_min');
            let timerInputHours = document.querySelector('.timer_input_hours');
            let timerSec = Number(timerInputSec.value);
            let timerMin = Number(timerInputMin.value);
            let timerHours = Number(timerInputHours.value);
            console.log(timerSec);
            console.log(timerMin);
            console.log(timerHours);
            const endDate = new Date();
            endDate.setHours((endDate.getHours() + timerHours), (endDate.getMinutes() + timerMin), (endDate.getSeconds() + timerSec + 1));

            timer.innerHTML = timeCountdownContainerHTML;

            const timerFunc = setInterval(function () {
                const currentDate = new Date();

                let deltaTime = endDate.getTime() - currentDate.getTime();

                if (deltaTime >= 0) {
                    let hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
                    let secs = Math.floor((deltaTime % (1000 * 60)) / 1000);

                    document.getElementById('timer-hours').innerHTML = ('0' + hours).slice(-2) + '<span class="label"> hour(s) </span>';
                    document.getElementById('timer-mins').innerHTML = ('0' + mins).slice(-2) + '<span class="label"> min(s) </span>';
                    document.getElementById('timer-secs').innerHTML = ('0' + secs).slice(-2) + '<span class="label"> sec(s) </span>';
                } else {
                    document.getElementById('timer').innerHTML = 'TIME IS OVER';
                    clearInterval(timerFunc)
                    const endingFunc = setTimeout(() => {
                        let element = document.querySelector('.timer_container');
                        document.body.removeChild(element)
                        clearInterval(endingFunc)
                    }, 3000);
                }
            }, 1000);
        })
    }

}
