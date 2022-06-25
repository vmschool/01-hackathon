import { Module } from "../core/module";
import { random } from '../utils';
import gif from '../gif/balloon.gif';

export default class Balloon extends Module {

	trigger() {

		const hasBalloon = document.querySelector('.balloon-gif')
		if (hasBalloon) {
			hasBalloon.remove()
		}

		const leftPosition = random(0, window.innerWidth)

		const balloonElement = document.createElement('img')
		balloonElement.className = 'balloon-gif'
		balloonElement.src = gif
		balloonElement.style.left = `${leftPosition - 100}px`
		balloonElement.alt = 'шарик'

		document.body.insertAdjacentElement('beforeend', balloonElement)
	}
}