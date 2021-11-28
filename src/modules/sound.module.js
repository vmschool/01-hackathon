import { Module } from '../core/module';
import { random } from '../utils';

import sound1 from '../assets/sounds/koshka.mp3';
import sound2 from '../assets/sounds/lev.mp3';
import sound3 from '../assets/sounds/volk.mp3';
import sound4 from '../assets/sounds/slon.mp3';
import sound5 from '../assets/sounds/tigr.mp3';

const sounds = [sound1, sound2, sound3, sound4, sound5];

export default class SoundModule extends Module {
	constructor(text) {
		super('Sound', text);
	}

	trigger() {
		console.log('Sound triggered');
		const body = document.querySelector('body');
		const audio = new Audio();
		audio.dataset.module = 'rsound';
		audio.setAttribute('autoplay', '');
		audio.type = 'audio/mp3';
		const soundNumber = random(0, (sounds.length - 1));
		audio.src = sounds[soundNumber];

		const message = document.createElement('h2');
		message.textContent = 'Включи звук!';
		message.style = 'margin: auto';
		body.append(message);

		body.append(audio);

		function deleteModule() {
			audio.pause();
			audio.remove();
			message.remove();
		}

		setTimeout(deleteModule, 3000);
	}

}
