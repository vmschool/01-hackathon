import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor(type, name) {
        super(type, name);
    }

    trigger() {
        let singleClicks = 0;
        let doubleClicks = 0;
        let timeToClick = false;

        while (!timeToClick) {
            timeToClick = Number(prompt('Сколько времени вам нужно (в секундах)?').trim());
        }

        const body = document.querySelector('body');
        const container = document.createElement('div');
        container.classList.add('container');

        const title = document.createElement('h2');
        title.classList.add('clicks-title');
        title.innerHTML = 'Начинайте кликать мышкой';

        const timer = document.createElement('p');
        timer.classList.add('clicks-timer');

        const results = document.createElement('p');
        results.classList.add('clicks-result');

        container.append(title, timer);
        body.append(container);

        function clicksCount(event) {
            if (event.type === 'click') {
                singleClicks += 1;
            } else if(event.type === 'dblclick') {
                doubleClicks += 1;
            }
        }

        function startListening() {
            setInterval(decreaseTime, 1000);
            body.addEventListener('click', clicksCount);
            body.addEventListener('dblclick', clicksCount);
        }

        function renderTime(value) {
            timer.innerHTML = `Осталось: ${value} секунд`;
        }

        function decreaseTime() {
            if (timeToClick === 0) {
                showResult(singleClicks, doubleClicks);
            } else {
                let current = --timeToClick;
                if (current < 10) {
                    current = `0${current}`;
                }
                
                renderTime(current);
            }   
        }

        function showResult(single, double) {
            title.remove();
            timer.remove();
            body.removeEventListener('click', clicksCount);
            body.removeEventListener('dblclick', clicksCount);

            results.innerHTML = `Вы успели совершить ${single - double * 2} одиночных кликов и ${double} двойных кликов`;
            container.append(results);
        }

        startListening();

    }

}