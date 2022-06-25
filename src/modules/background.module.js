import { Module } from '../core/module'

export default class BackgroundModule extends Module {
	
	constructor(text) {
		super('Background', text);
	}
	
	trigger() {
		console.log('Background triggered');
	}

}
