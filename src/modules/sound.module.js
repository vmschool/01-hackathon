import { Module } from "../core/module";
import { random } from "../utils";

const cache = {}

function importAll(r) {
  r.keys().forEach((key) => (cache[key.match(/\w+/)] = r(key)));
}

importAll(require.context('../assets/sounds/', true, /\.mp3$/))

function getSoundSrc() {
  return sounds[random(0, sounds.length - 1)];
}

export class SoundModule extends Module {
  trigger() {
    new Audio(cache[getSoundSrc()].default).play()
  }
}
