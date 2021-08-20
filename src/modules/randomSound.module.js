import { Module } from "@/core/module";
import { random } from "../utils";

export class RandomSound extends Module {
	arraySounds = [
		"http://www.beaniebestbuy.com/sounds/crocodile.wav",
		"http://www.talkingwav.com/wp-content/uploads/2017/10/cramer-02.wav",
		"http://cd.textfiles.com/mmplus/MEDIA/WAV/EFFECTS/ANIMALS/BARK.WAV",
		"http://cd.textfiles.com/10000gp2/500SNDS/13_47.WAV",
	];

	constructor() {
		super("randomsound", "Random Sound");
	}

	trigger() {
		const randomNumber = random(0, this.arraySounds.length - 1);
		const audio = new Audio([this.arraySounds[randomNumber]]);
		audio.play();
	}
}