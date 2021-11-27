import { Module } from '../core/module'

export default class TimerModule extends Module {
	
	constructor(text) {
		super('Timer', text);
	}

	trigger() {
		console.log('Timer triggered');
	}

}
