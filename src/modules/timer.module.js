import { Module } from "@/core/module";
import * as utils from "../utils";

export default class Timer extends Module {
	constructor(type, text) {
		super(type, text);
		this.time=10
	}

	timeOut() {
		this.time--
	}

	renderBlock(){
		const area = utils.getArea()
		const blockColor = utils.getRandomColor()
	}

	trigger() {
		console.log("Таймер запущен (тестовое сообщение)");
	}
}
