import { Module } from '../core/module'

export default class SoundModule extends Module {
	
	constructor(text) {
		super('Sound', text);
	}

	trigger() {
		console.log('Sound triggered');
	}

}
