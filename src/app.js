import "./styles.css";
import { ContextMenu } from "./menu";

import { ClicksModule } from "./modules/clicks.module";
import { BackgroundModule } from "./modules/background.module";
import { СurrencyModule } from "./modules/currency.module";
import { CityModule } from "./modules/city.module";
import { JokeModule } from "./modules/joke.module";

const menu = new ContextMenu();

const counterClick = new ClicksModule("counterClick", "Аналитика кликов (за 5 секунд)");
const backgroundModule = new BackgroundModule("startSlider", "Запусить слайдер");
const currencyModule = new СurrencyModule("getCurrency", "Курс валюты");
const cityModule = new CityModule("getCity", "Показать локацию");
const jokeModule = new JokeModule("getJoke", "Показать шутку");

menu.add(counterClick);
menu.add(backgroundModule);
menu.add(currencyModule);
menu.add(cityModule);
menu.add(jokeModule);

menu.render();
