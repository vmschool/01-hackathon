import { Module } from '../core/module'

export default class TimerModule extends Module {
	
	constructor(text) {
		super('Timer', text);
	}

	trigger() {
		console.log('Timer triggered');

		const timer = document.createElement('div');
		timer.className = 'timer_container';

		const input = document.createElement('input');
		input.className = 'timer_input';
		input.name = 'seconds';
		input.type = 'number';
		input.max = '60';
		input.min = '0';

		const button = document.createElement('button');
		button.className = 'button_start';
		button.textContent = 'запустить';

		const timeCountdown = document.createElement('div');
		timeCountdown.className = 'time_countdown';
		timeCountdown.textContent = '';

		timer.append(input, button);
		document.body.append(timer);

		button.addEventListener('click', (event) => {
			let timerInput = document.querySelector('.timer_input')
			let timerSec = Number(timerInput.value)
			timer.append(timeCountdown)
			const timerFunc = setInterval(function() {
				if (timerSec <= 0) {
					clearInterval(timerFunc)
					alert("time is over")
					timer.innerHTML = ''
				} else {
					let stringTimeSec = `${Math.trunc(timerSec)}`;
					const timeCountdown = document.querySelector('.time_countdown');
					timeCountdown.innerHTML = stringTimeSec;
					console.log(stringTimeSec)
					console.log(this.time)
				}
				--timerSec;
			}, 1000)

		})
	}

}
