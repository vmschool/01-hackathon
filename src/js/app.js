import Application from './application';
import ModuleFactory from './module.factory';
import ContextMenu from './menu';
import EmptyModule from './modules/empty.module';
import BackgroundModule from './modules/background.module';
import ShapesModule from './modules/shapes.module'

const moduleNames = ['empty', 'changeBG', 'shapes'];

const moduleClasses = {
  empty: EmptyModule,
  changeBG: BackgroundModule,
  shapes: ShapesModule,
};

const moduleTexts = {
  empty: 'пустой',
  changeBG: 'сменить фон',
  shapes: 'создать фигуру',
};

const moduleFactory = new ModuleFactory(moduleClasses, moduleTexts);
const contextMenu = new ContextMenu();

const app = new Application(moduleFactory, moduleNames, contextMenu);
app.run();
