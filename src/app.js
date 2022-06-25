import './styles.css'
import { ContextMenu } from './menu';
import { TimerModule } from './modules/timer.module';

import { CustomMessage } from './modules/custom_message.module';

import { BackgroundModule } from './modules/background.module';
import { Soundmodule } from './modules/sound.module';

const contextMenu = new ContextMenu('ul');
const timerModule = new TimerModule('timer', 'Обратный отсчёт');
const cMessageModule = new CustomMessage('custom-message', 'Кастомное сообщение');
contextMenu.add(timerModule);
contextMenu.add(cMessageModule);
const sound = new Soundmodule('sound', 'Случайный звук');
contextMenu.add(sound);

const backgroundModule = new BackgroundModule('background', 'Фон')
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
    const previousContainer = document.querySelector('.active');
    if (previousContainer) {
        previousContainer.classList.remove('active');
    }
    const selectContainer = document.querySelector(`.${selectModule}`);
    selectContainer.classList.add('active');

    console.log(selectContainer);

})

