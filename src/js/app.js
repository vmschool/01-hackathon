import Application from './application';
import ModuleFactory from './module.factory';
import ContextMenu from './menu';
import BackgroundModule from './modules/background.module';
import ParadiseModule from './modules/paradise.module';

const moduleNames = ['changeBG', 'paradise'];

const moduleClasses = {
  changeBG: BackgroundModule,
  paradise: ParadiseModule,
};

const moduleTexts = {
  changeBG: 'сменить фон',
  paradise: 'попасть в рай или уйти',
};

const moduleFactory = new ModuleFactory(moduleClasses, moduleTexts);
const contextMenu = new ContextMenu();

const app = new Application(moduleFactory, moduleNames, contextMenu);
app.run();
