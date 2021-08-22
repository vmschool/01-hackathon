import { Module } from "../core/module";

export class SoundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const arrSounds = [
            "../sounds/sound_1.mp3",
            "../sounds/sound_2.mp3",
            "../sounds/sound_3.mp3",
        ];

        function soundClick() {
            const audio = new Audio();
            audio.src = `${
                arrSounds[Math.floor(Math.random() * arrSounds.length)]
            }`;
            audio.autoplay = true;
        }

        soundClick();
    }
}
