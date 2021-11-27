import { Module } from '../core/module'

export default class MessageModule extends Module {
	
	constructor(text) {
		super('Message', text);
	}

	trigger() {
		console.log('Message triggered');
	}

}
