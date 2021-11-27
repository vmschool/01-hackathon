import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import { TimerModule } from './modules/timer.module';

const menu = new ContextMenu('.menu');
menu.init();

const backgroundModule = new BackgroundModule();
const clicksModule = new ClicksModule();
const shapeModule = new ShapeModule();
const timerModule = new TimerModule();
menu.add(backgroundModule, clicksModule, shapeModule, timerModule);
