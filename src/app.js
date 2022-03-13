import './styles.css'

import { RandomSoundModule } from './modules/randomsound.module'

const randomSoundModule = new RandomSoundModule('sound', 'Случайный звук');
randomSoundModule.trigger();