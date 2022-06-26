import { Module } from "../core/module";

export class RandomSound extends Module {
  #sounds = [
    "eminem",
    "goodluck",
    "maksim",
    "ofcourse",
    "sweeties",
    "vladilen",
  ];
  constructor() {
    super("sound", "Воспроизвести аудио");
  }

  trigger() {
    const randomSound =
      this.#sounds[Math.floor(Math.random() * this.#sounds.length)];
    this.#playRandomSound(randomSound);
  }

  #playRandomSound(audiofile) {
    const randomSoundAudioFile = new Audio(`/assets/sounds/${audiofile}.ogg`);
    randomSoundAudioFile.autoplay = true;

    return randomSoundAudioFile;
  }
}
