import './styles.css'
import { ContextMenu } from './menu';
import { TimerModule } from './modules/timer.module';
import { BackgroundModule } from './modules/background.module';

const contextMenu = new ContextMenu('ul');
const timerModule = new TimerModule('timer', 'Обратный отсчёт');
contextMenu.add(timerModule);

const backgroundModule = new BackgroundModule('background', 'фон')
contextMenu.add(backgroundModule);

document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    let elemX = document.elementFromPoint(event.clientX + 150, event.clientY);
    let elemY = document.elementFromPoint(event.clientX, event.clientY + 50);
    elemX === null ? contextMenu.el.style.left = `${event.clientX - 150}px` : contextMenu.el.style.left = `${event.clientX}px`;
    elemY === null ? contextMenu.el.style.top = `${event.clientY - 50}px` : contextMenu.el.style.top = `${event.clientY}px`;
    contextMenu.open();
})

contextMenu.el.addEventListener('click', (event) => {
    const { target } = event;
    const selectModule = target.dataset.type;
    const runApp = contextMenu.modules.find((module) => module.type === selectModule);
    runApp.trigger();
    contextMenu.close();
})

