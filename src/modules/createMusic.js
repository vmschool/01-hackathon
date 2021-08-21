import { Module } from "../core/module";
import { random, createEl } from "../utils";

export class CreateMusic extends Module {
  constructor() {
    super("createMusic", "Create Music");
  }

  trigger() {
    const keyZ = createEl("div", "z", ["z-key", "sound", "key-shadow"], "z");
    const keyX = createEl("div", "x", ["x-key", "sound", "key-shadow"], "x");
    const keyC = createEl("div", "c", ["c-key", "sound", "key-shadow"], "c");
    const keyV = createEl("div", "v", ["v", "sound", "key-shadow"], "v");
    const keyB = createEl("div", "b", ["b-key", "sound", "key-shadow"], "b");
    const keyN = createEl("div", "n", ["n-key", "sound", "key-shadow"], "n");
    const exit = createEl(
      "button",
      "exit",
      ["exit", "sound", "key-shadow"],
      "exit"
    );
    exit.addEventListener("click", () => {
      document.querySelector(".sounds").remove();
    });
    const keyM = createEl(
      "div",
      "background",
      ["background", "sound", "key-shadow"],
      "m"
    );
    const sounds = createEl("div", "", ["sounds", "hide"]);
    sounds.append(keyZ, keyX, keyC, keyV, keyB, keyN, keyM, exit);

    document.body.append(sounds);

    document.body.addEventListener("keypress", (event) => {
      const sounds = document.querySelectorAll(".sound");
      sounds.forEach((sound) => sound.classList.add("key-shadow"));
      switch (event.key) {
        case "z":
          const noteDo = document.querySelector("[data='z']");
          noteDo.classList.remove("key-shadow");
          new Audio(
            "http://cd.textfiles.com/maxsounds/WAV/EFEITOS/EXAMPLE.WAV"
          ).play();
          break;
        case "x":
          const noteRe = document.querySelector("[data='x']");
          noteRe.classList.remove("key-shadow");
          new Audio("http://www.denhaku.com/r_box/tr707/sd1.wav").play();
          break;
        case "c":
          const noteMi = document.querySelector("[data='c']");
          noteMi.classList.remove("key-shadow");
          new Audio(
            "http://bigsamples.free.fr/d_kit/hithat/909touch.wav"
          ).play();
          break;
        case "v":
          const noteFa = document.querySelector("[data='v']");
          noteFa.classList.remove("key-shadow");
          new Audio("http://4umi.com/web/sound/beat.wav").play();
          break;
        case "b":
          const noteSo = document.querySelector("[data='b']");
          noteSo.classList.remove("key-shadow");
          new Audio(
            "http://www.utc.fr/si28/ProjetsUpload/P2006_si28p004/flash_puzzle/sons/rush/shaker.wav"
          ).play();
          break;
        case "n":
          const noteLa = document.querySelector("[data='n']");
          noteLa.classList.remove("key-shadow");
          new Audio(
            "http://cd.textfiles.com/maxsounds/WAV/EFEITOS/OH25.WAV"
          ).play();
          break;
        case "m":
          const noteTi = document.querySelector("[data='m']");
          noteTi.classList.remove("key-shadow");
          new Audio(
            "http://www.easymusic.stakemann.de/Demo/SoulAlert.mp3"
          ).play();
          break;

        default:
          break;
      }
    });
  }
}
