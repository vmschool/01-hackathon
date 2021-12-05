import './styles.css';
import { ContextMenu } from './menu';
import {StartScreen} from './start';
import {Hint} from './hint';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { TimerModule } from './modules/timer.module';
import { ShapeModule } from './modules/shapeGenerator/shape.module';
import { WeatherModule } from './modules/weather.module';
import { QuotesModule } from './modules/quotes.module';
import { RandomGameModule } from './modules/randomGame.module';
import { CocktailModule } from './modules/cocktail.module';

const startScreen = new StartScreen();
startScreen.show();

const menu = new ContextMenu('.menu');
menu.init();

const hint = new Hint();
hint.show();

const backgroundModule = new BackgroundModule();
const clicksModule = new ClicksModule();
const shapeModule = new ShapeModule();
const timerModule = new TimerModule();
const weatherModule = new WeatherModule();
const quotesModule = new QuotesModule();
const randomGameModule = new RandomGameModule();
const cocktailModule = new CocktailModule();

menu.add(
    backgroundModule,
    clicksModule,
    shapeModule,
    weatherModule,
    quotesModule,
    timerModule,
    randomGameModule,
    cocktailModule
);
