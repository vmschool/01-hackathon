import { Module } from '../core/module'

export class BackgroundModule extends Module {
	constructor() {
		super('background', 'Случайный цвет фона');
	}

	trigger() {
		document.body.addEventListener('click', () => {
			const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
			document.body.style.backgroundColor = randomColor;
		})
	}
}

