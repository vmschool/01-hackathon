import { Popup } from './components/popup';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import './styles.css';

const menu = new ContextMenu('.menu');
menu.init();

const backgroundModule = new BackgroundModule();
const clicksModule = new ClicksModule();
const shapeModule = new ShapeModule();
menu.add(backgroundModule, clicksModule, shapeModule);
