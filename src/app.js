import './styles.css';
import {
  ContextMenu
} from './menu';
import {
  SoundModule
} from './modules/sound.module';
import {
  Timer
} from './modules/timer.module';
import {
  ShapeModule
} from './modules/shape.module';
import {
  BackgroundModule
} from './modules/background.module';
import {
  RandomtextModule
} from './modules/randomtext.module';
import {
  ClicksModule
} from './modules/clicks.module';

const menu = new ContextMenu('#menu');

const modules = [
  new SoundModule('sound', 'Рандомный звук'),
  new Timer('timer', 'Таймер'),
  new ShapeModule('shape', 'Случайная фигура'),
  new BackgroundModule('background', 'Случайный фон'),
  new RandomtextModule('randomtext', 'Случайная цитата'),
  new ClicksModule(),
];

class App {
  constructor(modules, menu) {
    this.modules = modules;
    this.menu = menu;
  }

  showContextMenu(event) {
    event.preventDefault();
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const appMenu = this.menu;

    function triggerModule(e) {
      const moduleType = e.target.dataset.type;
      modules.forEach(item => {
        if (item.type === moduleType) {
          item.trigger(e);
          appMenu.close();
          appMenu.removeListener('click', triggerModule);
        }
      });
    }

    this.menu.open(mouseX, mouseY);
    this.menu.el.addEventListener('click', triggerModule);

  }
  run() {
    this.menu.add(this.modules);
    const bindedContextMenu = this.showContextMenu.bind(this);
    document.body.addEventListener('contextmenu', bindedContextMenu);
  }
}

const app = new App(modules, menu);

app.run();