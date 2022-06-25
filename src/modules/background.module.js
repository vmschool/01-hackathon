import { Module } from '../core/module';
import { random } from '../utils';

export default class BackgroundModule extends Module {
	#colorNumber;

	constructor(type, text) {
		super(type, text);
		this.#colorNumber = 0;
	}

	trigger() {
		let hexString = "0123456789abcdef";

		let randomColor = () => {
			let hexCode = "#";
			for (let i = 0; i < 6; i++) {
				hexCode += hexString[Math.floor(Math.random() * hexString.length)];
			}
			return hexCode;
		}

		let colorOne = randomColor();
		let colorTwo = randomColor();
	
		document.body.style.background = `
			linear-gradient(${random([this.#colorNumber], 255)}deg, ${colorOne}, ${colorTwo})
		`;
	}
}