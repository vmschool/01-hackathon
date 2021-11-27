import { Module } from '../core/module'

export default class ClicksModule extends Module {

	#clicksTimeoutInSeconds;
	#numberOfClicks;
	#isActive;
	#timerSingleClick;

	constructor(text) {
		super('Clicks', text);		

		this.#clicksTimeoutInSeconds = 3;
		this.#numberOfClicks = 0;
		this.#isActive = false;

		this.setupEventListeners();
	}

	resetState() {
		this.#numberOfClicks = 0;
		this.#isActive = false;
	}

	setupEventListeners() {
		document.body.addEventListener('click', (event) => {			
			this.#isActive = true;
			if (event.detail === 1) {								
				this.#timerSingleClick = setTimeout(() => {
					this.clickProcessing();
				}, 100)
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
			console.log('Number of clicks:', this.#numberOfClicks - 1);
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
		alert(`Кол-во кликов ${this.#numberOfClicks - 1} за ${this.#clicksTimeoutInSeconds} cек.`)
	}	
}
