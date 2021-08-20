import { Module } from "@/core/module";

export default class Timer extends Module {
	constructor(type, text) {
		super(type, text);
	}

	trigger() {
		console.log("Таймер запущен (тестовое сообщение)");
	}
}
