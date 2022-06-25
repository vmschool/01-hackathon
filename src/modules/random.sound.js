import { Module } from '../core/module';
import { random } from '../utils';
import sound1 from '../sounds/1.mp3'
import sound2 from '../sounds/2.mp3'
import sound3 from '../sounds/3.mp3'
import sound4 from '../sounds/4.mp3'
import sound5 from '../sounds/5.mp3'
import sound6 from '../sounds/6.mp3'
import sound7 from '../sounds/7.mp3'
import sound8 from '../sounds/8.mp3'
import sound9 from '../sounds/9.mp3'
import sound10 from '../sounds/10.mp3'
import sound11 from '../sounds/11.mp3'

const sounds = [
	sound1,
	sound2,
	sound3,
	sound4,
	sound5,
	sound6,
	sound7,
	sound8,
	sound9,
	sound10,
	sound11,
]

export default class RandomSounds extends Module {

	trigger() {
		const randomNumber = random(0, sounds.length - 1)
		const randomSound = sounds[randomNumber]

		const soundElement = document.createElement('audio')
		soundElement.src = randomSound

		document.body.appendChild(soundElement)

		soundElement.play()
	}
}

