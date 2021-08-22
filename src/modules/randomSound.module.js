import { Module } from "../core/module";
import { random, showError } from "../utils";

export default class RandomSoundModule extends Module {
  arraySounds = [
    "http://cd.textfiles.com/sbsw/ANIMALS/FROG1.WAV",
    "http://www.classicalmusicproject.com/Joshuahomework/Sealion.wav",
    "http://cd.textfiles.com/mmplus/MEDIA/WAV/EFFECTS/ANIMALS/BARK.WAV",
    "http://ring-nature.com/tones/cat.mp3",
  ];

  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const randomNumber = random(0, this.arraySounds.length - 1);
    const audio = new Audio([this.arraySounds[randomNumber]]);
    audio.play()
        .catch(showError);
  }
}
