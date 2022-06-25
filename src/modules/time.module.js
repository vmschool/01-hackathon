import {Module} from '../core/module'

export class TimeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

	trigger() {
        const timerContainer = document.createElement('div');
        timerContainer.className = 'timer-container';
        timerContainer.style.cssText = `
            width: auto;
            height: 600px;
            margin-top: 100px;
        `;

        timerContainer.innerHTML = `
            <div class="container__text" 
                style= " 
                    margin: 0 auto; 
                    width: 500px; 
                    height: auto; 
                    text-align: center; 
                    padding-top: 30px; 
                    font-size: 36px;
                    font-weight: 900;">
                <span>До Нового года, осталось:</span> 
            </div>
        `;

        const element = document.createElement('div');
        element.className = 'timer';
        element.style.cssText = `
            margin-top: 50px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 500px;
        `;

        const style = `
            width: 102px;
            height: 120px;
            background: #fff;
            box-shadow: 0 4px 20px rgb(0 0 0 / 25%);
            font-size: 16px;
            font-weight: 300;
            text-align: center;
        `;

        const styleSpan = `
            display: block;
            margin-top: 20px;
            margin-bottom: 5px;
            font-size: 56px;
            font-weight: 700;
        `;

        element.innerHTML = `
            <div class="timer__block" style="${style}">
                <span id="days" style="${styleSpan}">12</span>
                дней
            </div>
            <div class="timer__block" style="${style}">
                <span id="hours" style="${styleSpan}">20</span>
                часов
            </div>
            <div class="timer__block" style="${style}">
                <span id="minutes" style="${styleSpan}">56</span>
                минут
            </div>
            <div class="timer__block" style="${style}">
                <span id="seconds" style="${styleSpan}">20</span>
                секунд
            </div>
        `;

        timerContainer.append(element);
        document.body.append(timerContainer);

        function timer(id, deadline) {
            function getTimeRemaining(endtime) {
                const t = Date.parse(endtime) - Date.parse(new Date()),
                    days = Math.floor( (t/(1000*60*60*24)) ),
                    seconds = Math.floor( (t/1000) % 60 ),
                    minutes = Math.floor( (t/1000/60) % 60 ),
                    hours = Math.floor( (t/(1000*60*60) % 24) );
          
                return {
                    'total': t,
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
            }
          
            function getZero(num){
                if (num >= 0 && num < 10) { 
                    return '0' + num;
                } else {
                    return num;
                }
            }
          
            function setClock(selector, endtime) {
          
                const timer = document.querySelector(selector),
                    days = timer.querySelector("#days"),
                    hours = timer.querySelector('#hours'),
                    minutes = timer.querySelector('#minutes'),
                    seconds = timer.querySelector('#seconds'),
                    timeInterval = setInterval(updateClock, 1000);
          
                updateClock();
          
                function updateClock() {
                    const t = getTimeRemaining(endtime);
          
                    days.innerHTML = getZero(t.days);
                    hours.innerHTML = getZero(t.hours);
                    minutes.innerHTML = getZero(t.minutes);
                    seconds.innerHTML = getZero(t.seconds);
          
                    if (t.total <= 0) {
                        clearInterval(timeInterval);
                    }
                }
            }
          
            setClock(id, deadline);
        }

        timer('.timer', '2022-12-31');

        const deleteElement = document.querySelector(".timer-container");
        if(timerContainer) {
            const timerId = setInterval(() => {
				deleteElement.remove();
				clearInterval(timerId);
			}, 5000);	
        }
    }
}