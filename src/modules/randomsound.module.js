import { Module } from '../core/module.js'
import { random } from '../utils.js'

export class RandomSoundModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.sounds = [
            'https://www.soundjay.com/clock/sounds/alarm-clock-01.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-children-happy-countdown-923.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-arcade-race-game-countdown-1952.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-melodic-race-countdown-1955.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-score-casino-counter-1998.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-start-match-countdown-1954.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-tech-weird-glitch-2685.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-futuristic-machine-starting-2689.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-thunder-rumble-during-a-storm-2395.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-swashing-sea-water-1179.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-toy-telephone-ring-1351.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-old-telephone-ring-1357.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-on-hold-ringtone-1361.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-urgent-simple-tone-loop-2976.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-reward-952.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-musical-alert-notification-2309.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-urgent-simple-tone-loop-2976.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-weird-alarm-loop-2977.mp3',
        ]
    };

    trigger() {
        const index = random(0, this.sounds.length - 1);
        const audio = new Audio(this.sounds[index]);
        audio.play();
    }
}