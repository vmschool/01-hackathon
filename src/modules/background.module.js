import { Module } from "../core/module";
import { getRandomColor } from "../utils";

export class BackgroundModule extends Module {
	constructor() {
		super("randomcolor", "Random Color");
	}

	trigger() {
		const randomColor = getRandomColor();
		document.body.style.backgroundColor = randomColor;
	}
}
