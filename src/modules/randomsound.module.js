import { Module } from "../core/module";

export class RandomSound extends Module {
  #sounds = ["eminem", "goodluck", "maksim", "ofcourse", "sweeties", "vladilen"];
  constructor() {
    super("sound", "sound");
  }

  trigger() {
    const randomSound = this.#sounds[Math.floor(Math.random() * sounds.length)];
    this.#playRandomSound(randomSound);
  }

  #playRandomSound(audiofile) {
    const randomSoundAudioFile = new Audio(
      `../../assets/sounds/${audiofile}.ogg`
    );
    randomSoundAudioFile.autoplay = true;

    return randomSoundAudioFile;
  }
}
