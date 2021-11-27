import './styles.css'
import {ContextMenu} from './menu';
import { BackgroundModule } from './modules/background.module';
import { RandomSound } from './modules/randomSound.module';


const contextMenu = new ContextMenu('.menu');

document.body.addEventListener('contextmenu', event => {
	contextMenu.open(event);
})

document.body.addEventListener("click", (event) => {
  contextMenu.close(event);
});

const backgroundModule = new BackgroundModule('background', 'To generate random background');
contextMenu.add(backgroundModule);

const randomSound = new RandomSound('randomSound', 'To generate random sound');
contextMenu.add(randomSound);









