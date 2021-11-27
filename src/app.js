import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import { WeatherModule } from './modules/weather.module';

const menu = new ContextMenu('.menu');
menu.init();

const backgroundModule = new BackgroundModule();
const clicksModule = new ClicksModule();
const shapeModule = new ShapeModule();
const weatherModule = new WeatherModule();
menu.add(backgroundModule, clicksModule, shapeModule, weatherModule);
