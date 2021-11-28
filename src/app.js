import './styles.css'
import { RandomSoundModule } from './modules/sound.module'


const snd = new RandomSoundModule('type')

const btn = document.createElement('button');
btn.textContent = 'CLick me'
document.body.append(btn)
btn.addEventListener('click', () => snd.trigger())