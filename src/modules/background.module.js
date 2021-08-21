import { Module } from "../core/module";
import { getRandomColor, getArea } from "../utils";

export class BackgroundModule extends Module {
	constructor() {
		super("randomColor", "Create Random Background Color");
	}

	trigger() {
		const randomColor = getRandomColor();
		const area = getArea();
		area.style.backgroundColor = randomColor;
		area.style.transition = `background-color 500ms ease`;
	}
}
