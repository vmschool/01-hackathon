import Application from './application';
import ModuleFactory from './module.factory';
import ContextMenu from './menu';
import EmptyModule from './modules/empty.module';
import BackgroundModule from './modules/background.module';

const moduleNames = ['empty', 'changeBG'];

const moduleClasses = {
  empty: EmptyModule,
  changeBG: BackgroundModule,
};

const moduleTexts = {
  empty: 'пустой',
  changeBG: 'сменить фон',
};

const moduleFactory = new ModuleFactory(moduleClasses, moduleTexts);
const contextMenu = new ContextMenu();

const app = new Application(moduleFactory, moduleNames, contextMenu);
app.run();
