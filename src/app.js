import './styles.css';
import './randomPhotoModule.css'

import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import {RandomPhotoModule} from './modules/show.random.photo.module';

let bgChange = new BackgroundModule('backgroundChange', 'Замена фона');
let clickModule = new ClicksModule('clicksCounting', 'Подсчет кликов');
let showRandomPhoto = new RandomPhotoModule('showRandomPhoto', 'Показать рандомное фото');

showRandomPhoto.trigger();


import { RandomSoundModule } from './modules/randomsound.module'

const randomSoundModule = new RandomSoundModule('sound', 'Случайный звук');
randomSoundModule.trigger();