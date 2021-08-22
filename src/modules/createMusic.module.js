import { Module } from "../core/module";
import { createEl, getArea, showError } from "../utils";

export default class CreateMusicModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  static #addSoundToKey(htmlTag, src) {
    const tag = htmlTag;
    const audio = createEl("audio", "", [], "");
    audio.setAttribute("src", src);
    tag.append(audio);
    return tag;
  }

  #createKeys() {
    const sounds = createEl("div", "", ["sounds"]);

    let keyZ = createEl("div", "z", ["z-key", "sound", "key-shadow"], "z");
    keyZ = CreateMusicModule.#addSoundToKey(
      keyZ,
      "http://cd.textfiles.com/maxsounds/WAV/EFEITOS/EXAMPLE.WAV"
    );

    let keyX = createEl("div", "x", ["x-key", "sound", "key-shadow"], "x");
    keyX = CreateMusicModule.#addSoundToKey(
      keyX,
      "http://www.denhaku.com/r_box/tr707/sd1.wav"
    );

    let keyC = createEl("div", "c", ["c-key", "sound", "key-shadow"], "c");
    keyC = CreateMusicModule.#addSoundToKey(
      keyC,
      "http://bigsamples.free.fr/d_kit/hithat/909touch.wav"
    );

    let keyV = createEl("div", "v", ["v-key", "sound", "key-shadow"], "v");
    keyV = CreateMusicModule.#addSoundToKey(keyV, "http://4umi.com/web/sound/beat.wav");

    let keyB = createEl("div", "b", ["b-key", "sound", "key-shadow"], "b");
    keyB = CreateMusicModule.#addSoundToKey(
      keyB,
      "http://www.utc.fr/si28/ProjetsUpload/P2006_si28p004/flash_puzzle/sons/rush/shaker.wav"
    );

    let keyN = createEl("div", "n", ["n-key", "sound", "key-shadow"], "n");
    keyN = CreateMusicModule.#addSoundToKey(
      keyN,
      "http://cd.textfiles.com/maxsounds/WAV/EFEITOS/OH25.WAV"
    );

    let keyM = createEl(
      "div",
      'background tap "m"',
      ["background", "sound", "key-shadow"],
      "m"
    );

    keyM = CreateMusicModule.#addSoundToKey(
      keyM,
      "http://www.easymusic.stakemann.de/Demo/SoulAlert.mp3"
    );

    const exit = createEl(
      "button",
      "exit",
      ["exit", "sound", "key-shadow"],
      "exit"
    );

    exit.addEventListener("click", () => {
      document.querySelector(".sounds").remove();
    });

    sounds.append(keyZ, keyX, keyC, keyV, keyB, keyN, keyM, exit);
    return sounds;
  }

  #showPanel() {
    document.body.addEventListener("keypress", (event) => {
      const sounds = document.querySelectorAll(".sound");
      sounds.forEach((sound) => sound.classList.add("key-shadow"));
      if (document.querySelector(".showMusicKeys")) {
        switch (event.key) {
          case "z":
          case "я":
            const note1 = document.querySelector("[data='z']");
            note1.classList.remove("key-shadow");
            const audio1 = note1.querySelector("audio");
            audio1.play()
                .catch(showError);
            break;
          case "x":
          case "ч":
            const note2 = document.querySelector("[data='x']");
            note2.classList.remove("key-shadow");
            const audio2 = note2.querySelector("audio");
            audio2.play()
                .catch(showError);
            break;
          case "c":
          case "с":
            const note3 = document.querySelector("[data='c']");
            note3.classList.remove("key-shadow");
            const audio3 = note3.querySelector("audio");
            audio3.play()
                .catch(showError);
            break;
          case "v":
          case "м":
            const note4 = document.querySelector("[data='v']");
            note4.classList.remove("key-shadow");
            const audio4 = note4.querySelector("audio");
            audio4.play()
                .catch(showError);
            break;
          case "b":
          case "и":
            const note5 = document.querySelector("[data='b']");
            note5.classList.remove("key-shadow");
            const audio5 = note5.querySelector("audio");
            audio5.play()
                .catch(showError);
            break;
          case "n":
          case "т":
            const noteL6 = document.querySelector("[data='n']");
            noteL6.classList.remove("key-shadow");
            const audio6 = noteL6.querySelector("audio");
            audio6.play()
                .catch(showError);
            break;
          case "m":
          case "ь":
            const note7 = document.querySelector("[data='m']");
            note7.classList.remove("key-shadow");
            const audio7 = note7.querySelector("audio");
            audio7.play()
                .catch(showError);
            break;

          default:
            break;
        }
      }
    });
  }

  trigger() {
    if (!document.querySelector(".showMusicKeys")) {
      const soundsHTML = this.#createKeys();

      if (soundsHTML) {
        const area = getArea();
        area.append(soundsHTML);
        soundsHTML.classList.add("showMusicKeys");
        this.#showPanel();
      }
    }
  }
}
