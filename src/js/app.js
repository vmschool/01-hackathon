import Application from './application';
import ModuleFactory from './module.factory';
import ContextMenu from './menu';
import BackgroundModule from './modules/background.module';
import ParadiseModule from './modules/paradise.module';
import ShapesModule from './modules/shapes.module';

const moduleNames = ['paradise', 'changeBG', 'shapes'];

const moduleClasses = {
  changeBG: BackgroundModule,
  paradise: ParadiseModule,
  shapes: ShapesModule,
};

const moduleTexts = {
  changeBG: 'сменить фон',
  paradise: 'попасть в рай или вернуться',
  shapes: 'создать фигуру',
};

const moduleFactory = new ModuleFactory(moduleClasses, moduleTexts);
const contextMenu = new ContextMenu();

const app = new Application(moduleFactory, moduleNames, contextMenu);
app.run();
