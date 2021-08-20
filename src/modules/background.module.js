import { Module } from "../core/module";
import { getRandomColor } from "../utils";

export class BackgroundModule extends Module {
	constructor() {
		super("randomColor", "Create Random Background Color");
	}

	trigger() {
		const randomColor = getRandomColor();
		document.body.style.backgroundColor = randomColor;
	}
}
