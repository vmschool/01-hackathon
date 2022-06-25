import './styles.css'

import './styles.css';

import { ContextMenu } from './menu';

import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import { randomFigure } from './modules/random-figure';

const contextMenu = new ContextMenu('.menu');

contextMenu.add(new randomFigure());                 

// contextMenu.add(new BackgroundModule());
// contextMenu.add(new ClicksModule());
// contextMenu.add(new ShapeModule());

document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  contextMenu.open();
  contextMenu.el.style.top = `${event.clientY}px`;
  contextMenu.el.style.left = `${event.clientX}px`;
});
