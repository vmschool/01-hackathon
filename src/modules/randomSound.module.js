import { Module } from "../core/module";
import { random } from "../utils";

export class RandomSound extends Module {
  sounds = [
    "http://ring-nature.com/tones/bird.mp3",
    "https://ring-nature.com/tones/dolphin.mp3",
    "http://cd.textfiles.com/mmplus/MEDIA/WAV/EFFECTS/ALARM_1.WAV",
    "http://cd.textfiles.com/mmplus/MEDIA/WAV/EFFECTS/ANIMALS/BIRD_2.WAV",
    "http://cd.textfiles.com/mmplus/MEDIA/WAV/EFFECTS/ANIMALS/LION.WAV",
    "http://cd.textfiles.com/mmplus/MEDIA/WAV/EFFECTS/ANIMALS/CAT_3.WAV",
  ];

  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const audio = new Audio([this.sounds[random(0, this.sounds.length - 1)]]);
    audio.play();
  }
}
