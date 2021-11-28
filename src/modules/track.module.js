import { Module } from "../core/module";
import { clearAllIntervals, random } from "../utils";
import alarmSoung from "../assets/alarm.wav";
import armsSoung from "../assets/arms.mp3";
import pingSoung from "../assets/ping.mp3";
import smsSoung from "../assets/sms.mp3";
import beepSoung from "../assets/beep.mp3";

export class TrackModule extends Module {
  #audio;
  constructor(type, text) {
    super(type, text);
    this.#audio = [
      new Audio(alarmSoung),
      new Audio(armsSoung),
      new Audio(pingSoung),
      new Audio(smsSoung),
      new Audio(beepSoung),
    ];
  }

  trigger() {
    document.body.innerHTML = "";
    clearAllIntervals();

    document.body.append(this.#createButtonPlayRandomSound());
  }

  #createButtonPlayRandomSound() {
    const buttonPlayRandomSound = document.createElement("button");
    buttonPlayRandomSound.className = "trackModule-buttonPlayRandomSound";
    buttonPlayRandomSound.textContent = "Воиспроизвести рандомный звук";

    buttonPlayRandomSound.addEventListener("click", () => {
      this.#playRandomSound();
    });

    return buttonPlayRandomSound;
  }
  #playRandomSound() {
    this.#audio[random(0, this.#audio.length - 1)].play();
  }
}
