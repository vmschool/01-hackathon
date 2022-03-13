import './styles.css'
import './randomPhotoModule.css'

import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { RandomPhotoModule } from './modules/show.random.photo.module';
import { RandomSoundModule } from './modules/randomsound.module'

let bgChange = new BackgroundModule('backgroundChange', 'Замена фона');
let clickModule = new ClicksModule('clicksCounting', 'Подсчет кликов');
let showRandomPhoto = new RandomPhotoModule('showRandomPhoto', 'Показать рандомное фото');
let randomSoundModule = new RandomSoundModule('sound', 'Случайный звук');

showRandomPhoto.trigger();
randomSoundModule.trigger();

const contextMenu = new ContextMenu();
contextMenu.open();
contextMenu.add();
