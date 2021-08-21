import { Module } from '../core/module';
import { random } from '../utils';


export class BackgroundGradientModule extends Module {
	constructor() {
		super('backgroundGradient', 'Случайный градиент фона ');
	}

	#amountColorsOfGradient() {
		return random(2, 6);
	}
	#intervalsOfGradient() {
		let amountIntervals = this.#amountColorsOfGradient();
		let arrOfColors = [];
		for (let i = 0; i < amountIntervals; i++) {
			arrOfColors[i] = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
		}
		return arrOfColors;
	}

	#directionOfGradient() {
		let direction = random(0, 360) + 'deg';
		return direction;
	}

	trigger() {
		document.body.addEventListener('click', () => {
			document.body.style.background = `linear-gradient(${this.#directionOfGradient()}, ${this.#intervalsOfGradient()})`
		})
	}
}