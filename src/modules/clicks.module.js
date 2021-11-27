import { Module } from '../core/module'

export default class ClicksModule extends Module {

	#clicksTimeoutInSeconds;
	#numberOfSingleClicks;
	#numberOfDoubleClicks;
	#isActive;
	#timerSingleClick;

	constructor(text) {
		super('Clicks', text);		

		this.resetState();
		this.setupEventListeners();
	}

	resetState() {
		this.#clicksTimeoutInSeconds = 3;
		this.#numberOfSingleClicks = 0;
		this.#numberOfDoubleClicks = 0;
		this.#isActive = false;
	}

	setupEventListeners() {
		document.body.addEventListener('click', (event) => {			
			this.#isActive = true;
			if (event.detail === 1) {
				this.#timerSingleClick = setTimeout(() => {
					this.clickProcessing(true);
				}, 200)
			}	
		});

		document.body.addEventListener('dblclick', () => {			
			clearTimeout(this.#timerSingleClick);
			this.clickProcessing(false);
		});
	}

	clickProcessing(isSingleClick) {
		if(this.#isActive) {			
			if(isSingleClick) {
				this.#numberOfSingleClicks++;
				console.log('Number of single clicks:', this.#numberOfSingleClicks);
			} else {
				this.#numberOfDoubleClicks++;
				console.log('Number of double clicks:', this.#numberOfDoubleClicks);
			}			
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
		alert(`Кол-во одиночных кликов ${this.#numberOfSingleClicks}\nКол-во двойных кликов ${this.#numberOfDoubleClicks}`)
	}	
}
