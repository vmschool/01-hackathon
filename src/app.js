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
  const windowHeight = document.documentElement.clientHeight;
  const windowWidth = document.documentElement.clientWidth;

  const menu = document.querySelector('.menu');

  contextMenu.open();
  const menuWidth = menu.offsetWidth + 50;
  const menuHeight = menu.offsetHeight + 4;


  ((windowWidth - event.clientX) < menuWidth)
    ? (contextMenu.el.style.left = `${windowWidth - menuWidth}px`)
    : (contextMenu.el.style.left = `${event.clientX + 50}px`);

  ((windowHeight - event.clientY) < menuHeight)
    ? contextMenu.el.style.top = `${windowHeight - menuHeight}px`
    : contextMenu.el.style.top = `${event.clientY}px`;
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
