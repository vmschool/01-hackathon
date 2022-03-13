import { random } from '../utils.js'

// function random(min, max) {
//     return Math.round(min - 0.5 + Math.random() * (max - min + 1));
// }

export const sounds = [
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
];

// const num = random(0, sounds.length - 1);
// const bodyTag = document.querySelector('body');
// const audioTag = document.createElement('audio');
// // const audioEl = document.querySelector('audio');
// const sourceTag = document.createElement('source');
//
// bodyTag.prepend(audioTag);
// audioTag.prepend(sourceTag);
//
// audioTag.setAttribute('controls', '');
// audioTag.setAttribute('autoplay', '');
// audioTag.setAttribute('loop', '');
// audioTag.setAttribute('name', 'media');
// // audioTag.setAttribute('hidden', '');
// sourceTag.setAttribute('src', `${sounds[num]}`);
// sourceTag.setAttribute('type', 'audio/mpeg');
//
// setTimeout(delAudio, 30000);
// function delAudio() {
//     audioTag.remove();
// }

const index = random(0, sounds.length - 1);
console.log(index);
const audio = new Audio(sounds[index]);
console.log(audio);
// console.log('autoplay? ', audio.autoplay);
// console.log('autoplay? ', audio.autoplay = true);
// console.log('autoplay? ', audio.autoplay);
audio.play();