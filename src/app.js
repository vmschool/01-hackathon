import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { TimerModule } from './modules/timer.module';
import {ShapeModule} from './modules/shapeGenerator/shape.module';
import { WeatherModule } from './modules/weather.module';
import { QuotesModule } from './modules/quotes.module';
import { RandomGameModule } from './modules/randomGame.module';

const menu = new ContextMenu('.menu');
menu.init();

const backgroundModule = new BackgroundModule();
const clicksModule = new ClicksModule();
const shapeModule = new ShapeModule();
const timerModule = new TimerModule();
const weatherModule = new WeatherModule();
const quotesModule = new QuotesModule();
const randomGameModule = new RandomGameModule();

menu.add(backgroundModule, clicksModule, shapeModule, weatherModule, quotesModule, timerModule, randomGameModule);
