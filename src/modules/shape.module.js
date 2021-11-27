import { Module } from '../core/module'

export default class ShapeModule extends Module {
	
	constructor(text) {
		super('Shape', text);
	}

	trigger() {
		console.log('Shape triggered');
	}

}
