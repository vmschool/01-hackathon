import './styles.css';
import {
  ContextMenu
} from './menu';

const menu = new ContextMenu('#menu');

const modules = [];

menu.add(modules);

document.body.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  menu.open(mouseX, mouseY);

  function eventHandler(e) {
    const moduleType = e.target.dataset.type;
    modules.forEach(item => {
      if (item.type === moduleType) {
        item.trigger(e);
        menu.el.removeEventListener('click', eventHandler);
        menu.close();
      }
    });
  }

  menu.el.addEventListener('click', eventHandler);
});