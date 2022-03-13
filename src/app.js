import './styles.css'
import './randomPhotoModule.css'

import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { RandomPhotoModule } from './modules/show.random.photo.module';
import { RandomSoundModule } from './modules/randomsound.module'

let bgChange = new BackgroundModule('bgChange', 'Замена фона');
let clickModule = new ClicksModule('clickModule', 'Подсчет кликов');
let showRandomPhoto = new RandomPhotoModule('showRandomPhoto', 'Показать рандомное фото');
let randomSoundModule = new RandomSoundModule('randomSoundModule', 'Случайный звук');

// showRandomPhoto.trigger();
// randomSoundModule.trigger();

const contextMenu = new ContextMenu('.menu');
contextMenu.open();
contextMenu.add(bgChange.type, bgChange.text);
contextMenu.add(clickModule.type, clickModule.text);
contextMenu.add(showRandomPhoto.type, showRandomPhoto.text);
contextMenu.add(randomSoundModule.type, randomSoundModule.text);

console.log('context', contextMenu.el);
contextMenu.el.addEventListener('click', (event) => {
    if (event.target.id === 'bgChange') {
        bgChange.trigger();
    } else if (event.target.id === 'clickModule') {
        clickModule.trigger();
    } else if (event.target.id === 'showRandomPhoto') {
        showRandomPhoto.trigger();
    } else if (event.target.id === 'randomSoundModule') {
        randomSoundModule.trigger();
    }
})




console.log(bgChange.type);
