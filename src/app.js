import './styles.css';
import {
  ContextMenu
} from './menu';
// import {
//   SoundModule
// } from './modules/sound.module';
// import {Timer} from './modules/timer.module';

const menu = new ContextMenu('#menu');

const modules = [
  // new SoundModule('sound', 'Рандомный звук'),
  // new Timer('timer', 'Таймер'),
  new Timer('timer', 'Таймер'),
];

menu.add(modules);

function triggerModule(e) {
  const moduleType = e.target.dataset.type;
  modules.forEach(item => {
    if (item.type === moduleType) {
      item.trigger(e);
      menu.el.removeEventListener('click', triggerModule);
      menu.close();
    }
  });
}

function showContextMenu(event) {
  event.preventDefault();
  const mouseX = event.pageX;
  const mouseY = event.pageY;
  menu.open(mouseX, mouseY);
  menu.el.addEventListener('click', triggerModule);
  document.body.removeEventListener('click', triggerModule);
}

document.body.addEventListener('contextmenu', showContextMenu);

