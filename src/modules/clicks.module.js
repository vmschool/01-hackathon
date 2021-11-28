import { Module } from '../core/module'

export default class ClicksModule extends Module {

	constructor(text) {
		super('Clicks', text);
	}
	
	trigger() {
		console.log('Clicks triggered');
	}
	
}
