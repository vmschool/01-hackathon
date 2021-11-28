import { Module } from '../core/module';

const colors = [
	{
		background: 'linear-gradient(109.6deg, rgba(255,179,189,1) 1.8%, rgba(254,248,154,1) 50.6%, rgba(161,224,186,1) 100.3% )',
 		color: '#444444'
	},
	{
		background: 'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
 		color: '#ffffff'
	},
	{
		background: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)',
 		color: '#444444'
	},
	{
		background: 'radial-gradient(circle 489px at 49.3% 46.6%, rgba(255,214,126,1) 0%, rgba(253,200,0,1) 100.2% )',
 		color: '#444444'
	},
	{
		background: 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)',
 		color: '#ffffff'
	},
	{
		background: 'linear-gradient(179.4deg, rgba(132,56,122,1) 14.6%, rgba(190,24,49,1) 104.7%)',
 		color: '#ffffff'
	},
	{
		background: 'linear-gradient(73.1deg, rgba(34,126,34,1) 8%, rgba(99,162,17,1) 86.9%)',
 		color: '#ffffff'
	}
];

export default class BackgroundModule extends Module {
	#colorNumber;
	
	constructor(text) {
		super('Background', text);
		this.#colorNumber = 0;
	}
	
	trigger() {
		document.body.style.background = colors[this.#colorNumber].background;
		document.body.style.color = colors[this.#colorNumber].color;
		this.#colorNumber++;
		
		if (this.#colorNumber >= colors.length) {
			this.#colorNumber = 0;
		}
	}
}
