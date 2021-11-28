export let audio = [new Audio('./assets/alarm.wav'),
new Audio('./assets/ping.mp3'),
new Audio('./assets/sms.mp3'),
new Audio('./assets/arms.mp3'),
new Audio('./assets/beep.mp3')];

export let currentAudio;

export function play_audio(task) {

    if(task == 'play'){
        currentAudio = Math.round(Math.random()*audio.length + 0.5);        
        audio[currentAudio].play();
    }
    if(task == 'stop'){
        audio[currentAudio].pause();
    }
};