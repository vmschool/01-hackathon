import "./styles.css";
import { ContextMenu } from "./menu";

import { ClicksModule } from "./modules/clicks.module";
import { BackgroundModule } from "./modules/background.module";
import { СurrencyModule } from "./modules/currency.module";
import { CityModule } from "./modules/city.module";
import { JokeModule } from "./modules/joke.module";
import { WeatherModule } from "./modules/weather.module";
import { FigureModule } from "./modules/figure.module";
import { BackgroundColorModule } from "./modules/backgroundColor.module";
import { RandomQuote } from "./modules/randomQuote.module";
import { playRandomSound } from "./modules/randomSound.module";

const menu = new ContextMenu();

const counterClick = new ClicksModule("counterClick", "Аналитика кликов (за 5 секунд)");
const backgroundModule = new BackgroundModule("startSlider", "Запусить слайдер");
const currencyModule = new СurrencyModule("getCurrency", "Курс валюты");
const cityModule = new CityModule("getCity", "Показать локацию");
const jokeModule = new JokeModule("getJoke", "Показать шутку");
const weatherModule = new WeatherModule("getWeather", "Показать погоду");
const figureModule = new FigureModule("createFigure", "Создать фигуру");
const backgroundColorModule = new BackgroundColorModule("createBackground", "Создать случайный фон");
const addRandomQuote = new RandomQuote("randomQuote", "Произвольная фраза");
const addRandomSound = new playRandomSound("randpmSound", "Произвольный звук");

menu.add(counterClick);
menu.add(backgroundModule);
menu.add(currencyModule);
menu.add(cityModule);
menu.add(jokeModule);
menu.add(weatherModule);
menu.add(figureModule);
menu.add(backgroundColorModule);
menu.add(addRandomQuote);
menu.add(playRandomSound);

menu.render();
