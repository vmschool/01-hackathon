"use strict";

import { Module } from "../core/module";
import {
	getArea,
	createModal,
	WEATHER_API_URL,
	WEATHER_API_KEY,
} from "../utils";

export class WeatherModule extends Module {
	#area;
	constructor(type, text) {
		super(type, text);
		this.#area = getArea();
	}

	async #getWeatherData(city) {
		try {
			const data = await fetch(
				`${WEATHER_API_URL}${city}&lang=ru&units=metric&appid=${WEATHER_API_KEY}`
			);
			const resp = await data.json();
			return resp;
		} catch (err) {
			console.error(err);
		}
	}

	#createMarkUpHTML(data) {
		const divWeather = document.createElement("div");
		divWeather.className = "weather";

		const titleWeather = document.createElement("h2");
		titleWeather.className = "titleWeather";
		titleWeather.textContent = `Погода в городе ${data.name}`;

		const temperatureWeather = document.createElement("p");
		temperatureWeather.className = "temperatureWeather";
		temperatureWeather.textContent = `Погода: ${data.weather[0].description}, ${data.main.temp}°C`;

		const humidityWeather = document.createElement("p");
		humidityWeather.className = "humidityWeather";
		humidityWeather.textContent = `Влажность: ${data.main.humidity} %`;

		const windWeather = document.createElement("p");
		windWeather.className = "windWeather";
		windWeather.textContent = `Ветер: ${data.wind.speed} км/ч`;

		divWeather.append(
			titleWeather,
			temperatureWeather,
			humidityWeather,
			windWeather
		);

		return divWeather;
	}

	#getCurrentWeatherImageHTML(data) {
		const image = document.createElement("img");
		image.className = "weatherImage";
		image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

		return image;
	}

	#displayData(weatherMarkUp, image) {
		const modal = createModal("weather");
		modal.append(weatherMarkUp, image);

		this.#area.append(modal);
	}

	async trigger() {
		try {
			const data = await this.#getWeatherData("Хабаровск");

			this.#displayData(
				this.#createMarkUpHTML(data),
				this.#getCurrentWeatherImageHTML(data)
			);
		} catch (err) {
			console.log(`ОШИБКА - ${err}`);
		}
	}
}
