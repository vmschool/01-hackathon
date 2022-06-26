import './styles.css'
import {ContextMenu} from './menu';
import {BackgroundModule} from './modules/background.module';
import { SoundModule } from './modules/sound.module';

const contextMenu = new ContextMenu('#menu');
contextMenu.open();
contextMenu.close();

const backgroundModule = new BackgroundModule('background', 'Изменить цвет фона');
contextMenu.add(backgroundModule);

const soundModule = new SoundModule('sound', 'Случайный звук')
contextMenu.add(soundModule)
