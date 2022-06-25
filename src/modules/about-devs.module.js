import { Module } from '../core/module'

export default class AboutDevsModule extends Module {
	
	constructor(text) {
		super('AboutDevs', text);
	}

	trigger() {
		console.log('About Devs triggered');
	}

}
