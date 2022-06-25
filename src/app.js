import "./styles.css";
import ContextMenu from "./menu";
// import sound from './Sounds/1.mp3'
import RandomSounds from "./modules/random.sound";
// const path = require('path');

const contextMenuItems = [
	"Фон",
	"Отлавливание кликов",
	"Аналитика кликов",
	"Таймер отсчетов",
	"Случайная фигура",
	"Случайный звук",
];
const menu = new ContextMenu("body", ".menu", contextMenuItems);
menu.render();



const menuList = document.querySelector('.menu')
menuList.addEventListener('click', event => {
	const { target } = event

	if (target.textContent === "Случайный звук") {

		const randomSound = new RandomSounds('mp3', 'audio')
		randomSound.trigger()
	}
})





