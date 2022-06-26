//>>>>>>>>   Импорт стилей   <<<<<<<<<
import './styles.css'
import { ContextMenu } from './menu';

//>>>>>>>>   Импорт модулей   <<<<<<<<<
import { ClicksModule } from "./modules/clicks.module";
import { TimerModule } from './modules/timer.module';
import { ShapeModule } from './modules/shape.module';
import { CustomMessage } from './modules/custom_message.module';
import { BackgroundModule } from './modules/background.module';
import { Soundmodule } from './modules/sound.module';

//>>>>>>>>   Создание меню   <<<<<<<<<
const contextMenu = new ContextMenu('ul');
const shapeModule = new ShapeModule('shape', 'Создать фигуру');
const timerModule = new TimerModule('timer', 'Обратный отсчёт');
const cMessageModule = new CustomMessage('custom-message', 'Кастомное сообщение');
const sound = new Soundmodule('sound', 'Случайный звук');
const clicks = new ClicksModule("click", "Счетчик кликов");
const backgroundModule = new BackgroundModule('background', 'Фон');

contextMenu.add(timerModule);
contextMenu.add(shapeModule);
contextMenu.add(cMessageModule);
contextMenu.add(sound);
contextMenu.add(backgroundModule);
contextMenu.add(clicks);

//>>>>>>>>   Отображение меню   <<<<<<<<<
document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  let elemX = document.elementFromPoint(event.clientX + 150, event.clientY);
  let elemY = document.elementFromPoint(event.clientX, event.clientY + 50);

  const windowHeight = document.documentElement.clientHeight;
  const menu = document.querySelector('.menu');
  const menuHeight = menu.offsetHeight + 2;

  elemX === null
    ? (contextMenu.el.style.left = `${event.clientX - 150}px`)
    : (contextMenu.el.style.left = `${event.clientX}px`);
  ((windowHeight - event.clientY) < menuHeight)
    ? contextMenu.el.style.top = `${windowHeight - menuHeight}px`
    : contextMenu.el.style.top = `${event.clientY}px`;
  contextMenu.open();
});

//>>>>>>>>   Обработка выбранного пункта меню   <<<<<<<<<
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
})
