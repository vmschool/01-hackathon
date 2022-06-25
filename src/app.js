import './styles.css'
import { ContextMenu } from './menu';
import { TimerModule } from './modules/timer.module';

const contextMenu = new ContextMenu('ul');
const timerModule = new TimerModule('timer', 'Обратный отсчёт');
contextMenu.add(timerModule);

document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    contextMenu.el.style.top = `${event.clientY}px`;
    contextMenu.el.style.left = `${event.clientX}px`;
    contextMenu.open();
})

