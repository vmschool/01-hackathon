import { Module } from '../core/module'

export default class ClicksModule extends Module {

	#clicksTimeoutInSeconds;
	#numberOfClicks;
	#isActive;
	#timerSingleClick;

	constructor(text) {
		super('Clicks', text);		

		this.resetState();
		this.setupEventListeners();
	}

	resetState() {
		this.#clicksTimeoutInSeconds = 3;
		this.#numberOfClicks = 0;
		this.#isActive = false;
	}

	setupEventListeners() {
		document.body.addEventListener('click', (event) => {			
			this.#isActive = true;
			if (event.detail === 1) {								
				this.#timerSingleClick = setTimeout(() => {
					this.clickProcessing();
				}, 200)
			}	
		});

		document.body.addEventListener('dblclick', () => {			
			clearTimeout(this.#timerSingleClick);
			this.clickProcessing();			
		});
	}

	clickProcessing() {
		if(this.#isActive) {
			this.#numberOfClicks++;
			console.log('Number of clicks:', this.#numberOfClicks);
		}
	}
	
	trigger() {
		console.log('Clicks triggered');
		
		this.resetState();
		setTimeout(() => {			
			this.clickTimeout();
		},  this.#clicksTimeoutInSeconds * 1000);		
	}	

	clickTimeout() {
		this.#isActive = false;
		alert(`Кол-во кликов ${this.#numberOfClicks} за ${this.#clicksTimeoutInSeconds} cек.`)
	}	
}
