import { Module } from '../core/module'
import './clicks.module.css'

export default class ClicksModule extends Module {

	#clicksTimeoutInSeconds;
	#numberOfSingleClicks;
	#numberOfDoubleClicks;
	#isActive;
	#timerSingleClick;

	constructor(text) {
		super('Clicks', text);		

		this.#resetState();
		this.#setupEventListeners();
	}

	#resetState() {
		this.#clicksTimeoutInSeconds = 3;
		this.#numberOfSingleClicks = 0;
		this.#numberOfDoubleClicks = 0;
		this.#isActive = false;
	}

	#setupEventListeners() {
		document.body.addEventListener('click', (event) => {			
			this.#isActive = true;
			if (event.detail === 1) {
				this.#timerSingleClick = setTimeout(() => {
					this.#clickProcessing(true);
				}, 200)
			}	
		});

		document.body.addEventListener('dblclick', () => {			
			clearTimeout(this.#timerSingleClick);
			this.#clickProcessing(false);
		});
	}

	#clickProcessing(isSingleClick) {
		if(this.#isActive) {			
			if(isSingleClick) {
				this.#numberOfSingleClicks++;
				console.log('Number of single clicks:', this.#numberOfSingleClicks);
			} else {
				this.#numberOfDoubleClicks++;
				console.log('Number of double clicks:', this.#numberOfDoubleClicks);
			}
			this.#updateAnalyticsOfClicks();
		}
	}
	
	trigger() {
		console.log('Clicks triggered');
		
		this.#resetState();
		this.#createHtml();
		setTimeout(() => {			
			this.#updateAnalyticsOfClicks();
			this.#isActive = false;
		},  this.#clicksTimeoutInSeconds * 1000);
	}	

	#updateAnalyticsOfClicks() {				
		let singleClicks = document.querySelector('#clicks-module-single-counter');
		if(singleClicks) {
			singleClicks.textContent = `Кол-во одиночных кликов: ${this.#numberOfSingleClicks}`;
		}

		let doubleClicks = document.querySelector('#clicks-module-double-counter');
		if(doubleClicks) {
			doubleClicks.textContent = `Кол-во двойных кликов: ${this.#numberOfDoubleClicks}`;
		}

		//alert(`Кол-во одиночных кликов ${this.#numberOfSingleClicks}\nКол-во двойных кликов ${this.#numberOfDoubleClicks}`)
	}	

	#createHtml() {

		const body = document.getElementsByTagName('body')[0];

		let oldDiv = document.querySelector('.root-clicks-module');
		if(oldDiv) {			
			body.removeChild(oldDiv);
		}

		console.log('oldDiv', oldDiv);

		let div = document.createElement("div");
		div.className = 'root-clicks-module';
		
		let singleClickCaption = document.createElement("div");
		singleClickCaption.className = 'clicks-module-counter-caption'
		singleClickCaption.id = 'clicks-module-single-counter-caption';		
		
		let doubleClickCaption = document.createElement("div");
		doubleClickCaption.className = 'clicks-module-counter-caption';
		doubleClickCaption.id = 'clicks-module-double-counter-caption';

		// let 

		div.appendChild(singleClickCaption);
		div.appendChild(doubleClickCaption);
		
		body.append(div);

		this.#updateAnalyticsOfClicks();
	}
}
