import { Module } from "../core/module";
import bangGif from '../gif/bang.gif';
import aimImage from '../gif/aim.png';

export default class AimBlock extends Module {

	constructor(type) {
		super(type)
	}

	trigger() {
		document.body.insertAdjacentElement('beforeend', this.#createAimElement())
		this.#toggleClassBody('off')
		const cursor = document.querySelector('.aim')

		let mouseX = 0
		let mouseY = 0

		let balloonX = 0
		let balloonY = 0

		document.addEventListener('mousemove', event => {
			mouseX = event.clientX;
			mouseY = event.clientY;
			cursor.style.left = mouseX - 29 + "px";
			cursor.style.top = mouseY - 25 + "px";
		})
		document.addEventListener('mousedown', event => {

			this.#toggleClassBody('on')
			cursor.remove()

			const balloonLocation = document.querySelector('.balloon-gif')

			balloonX = +balloonLocation.offsetLeft
			balloonY = +balloonLocation.offsetTop

			if (mouseX > balloonX && mouseX < balloonX + balloonLocation.clientWidth &&
				mouseY > balloonY && mouseY < balloonY + balloonLocation.clientHeight) {

				const leftBangPosition = mouseX - 23
				const topBangPosition = mouseY - 23
				this.#createBangElement(leftBangPosition, topBangPosition)
				this.#banging()
				this.#removeBallon()
			} else {
				this.#createMessege(mouseX, mouseY)
			}
		},
			{
				once: true
			})
	}

	#createAimElement() {
		const aim = document.createElement('img')
		aim.className = 'aim'
		aim.src = aimImage
		return aim
	}

	#toggleClassBody(state) {
		switch (state) {
			case 'off':
				document.body.classList.add('cursor-none')
				break
			case 'on':
				document.body.classList.remove('cursor-none')
				break
		}
	}

	#removeBallon() {
		const balloonElement = document.querySelector('.balloon-gif')
		balloonElement.remove()
	}

	#createBangElement(left, top) {
		const bangElement = document.createElement('img')
		bangElement.className = 'bang'
		bangElement.src = bangGif
		bangElement.style.left = `${left}px`
		bangElement.style.top = `${top}px`

		document.body.insertAdjacentElement('beforeend', bangElement)
	}
	#banging() {
		const bangElement = document.querySelector('.bang')
		setTimeout(() => {
			bangElement.remove()
		}, 1000)
	}
	#createMessege(left, top) {
		const massege = document.createElement('div')
		massege.className = 'messege'
		massege.style.left = `${left}px`
		massege.style.top = `${top}px`
		massege.style.color = 'red'
		massege.textContent = 'Мимо!'

		document.body.insertAdjacentElement('beforeend', massege)
		setTimeout(() => {
			massege.remove()
		}, 1000)
	}
}