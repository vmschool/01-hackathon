import { Module } from '../core/module'

export default class ClicksModule extends Module {

	#clicksTimeoutMsec = 3000;
	#numberOfClicks = 0;
	#isActive = false;

	constructor(text) {
		super('Clicks', text);		
	}
	
	trigger() {
		console.log('Clicks triggered');
		
		this.#numberOfClicks = 0;
		this.#isActive = true;

		setTimeout(() => {			
			this.clickTimeout();
		},  this.#clicksTimeoutMsec);

		document.body.addEventListener('click', (event) => {			
			if(this.#isActive) {
				this.#numberOfClicks++;
				console.log('Number of clicks:', this.#numberOfClicks);
			}						
		});
	}

	clickTimeout() {
		alert(`Кол-во кликов ${this.#numberOfClicks} за ${this.#clicksTimeoutMsec} Мсек.`)
		this.#isActive = false;
	}
	
}
