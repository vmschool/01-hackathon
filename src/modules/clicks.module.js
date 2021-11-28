import { Module } from '../core/module'
import styles from './clicks.module.css'

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
	
	trigger() {
		console.log('Clicks triggered');		
		this.#resetState();
		this.#createHtml();
		this.#startTimer();
	}

	#resetState() {
		this.#clicksTimeoutInSeconds = 5;
		this.#numberOfSingleClicks = 0;
		this.#numberOfDoubleClicks = 0;
		this.#isActive = false;
	}

	#setupEventListeners() {
		document.body.addEventListener('click', (event) => {			
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

	#startTimer() {		
		this.#isActive = true;
		setTimeout(() => {						
			this.#isActive = false;
		},  this.#clicksTimeoutInSeconds * 1000);		
	}

	#updateAnalyticsOfClicks() {				
		let singleClicks = document.querySelector('#clicks-module-single-counter-number');
		if(singleClicks) {
			singleClicks.textContent = `${this.#numberOfSingleClicks}`;
		}

		let doubleClicks = document.querySelector('#clicks-module-double-counter-number');
		if(doubleClicks) {
			doubleClicks.textContent = `${this.#numberOfDoubleClicks}`;
		}
	}	

	#createHtml() {
		const body = document.getElementsByTagName('body')[0];

		let root = document.querySelector('.root-clicks-module');
		if(root) {			
			body.removeChild(root);
		}

		let div = document.createElement("div");
		div.className = 'root-clicks-module';
		
		let singleClickBox = document.createElement("div");
		singleClickBox.className = 'clicks-module-box';

		let doubleClickBox = document.createElement("div");
		doubleClickBox.className = 'clicks-module-box';

		let singleClickCaption = document.createElement("div");
		singleClickCaption.className = 'clicks-module-counter-caption';
		singleClickCaption.textContent = 'Кол-во одиночных кликов:';
		
		let doubleClickCaption = document.createElement("div");
		doubleClickCaption.className = 'clicks-module-counter-caption';
		doubleClickCaption.textContent = 'Кол-во двойных кликов:';

		let singleClickCounter = document.createElement("div");
		singleClickCounter.className = 'clicks-module-counter-number';
		singleClickCounter.id = 'clicks-module-single-counter-number';

		let doubleClickCounter = document.createElement("div");
		doubleClickCounter.className = 'clicks-module-counter-number';
		doubleClickCounter.id = 'clicks-module-double-counter-number';

		singleClickBox.appendChild(singleClickCaption);
		singleClickBox.appendChild(singleClickCounter);

		doubleClickBox.appendChild(doubleClickCaption);
		doubleClickBox.appendChild(doubleClickCounter);

		div.appendChild(singleClickBox);
		div.appendChild(doubleClickBox);
		
		body.append(div);

		this.#updateAnalyticsOfClicks();
	}
}
