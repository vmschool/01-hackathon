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

		const statusWeather = document.createElement("p");
		statusWeather.className = "statusWeather";
		statusWeather.textContent = `Погода: ${data.weather[0].description}`;

		const temperatureWeather = document.createElement("p");
		temperatureWeather.className = "temperatureWeather";
		temperatureWeather.textContent = `Температура: ${data.main.temp}°C`;

		const humidityWeather = document.createElement("p");
		humidityWeather.className = "humidityWeather";
		humidityWeather.textContent = `Влажность: ${data.main.humidity} %`;

		const windWeather = document.createElement("p");
		windWeather.className = "windWeather";
		windWeather.textContent = `Ветер: ${data.wind.speed} км/ч`;

		divWeather.append(
			statusWeather,
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

	#displayData(cityName, weatherMarkUp, image) {
		const modal = createModal("weather-modal");
		const titleWeather = document.createElement("h2");
		titleWeather.className = "titleWeather";
		titleWeather.textContent = `Погода в городе ${cityName}`;

		const weatherWrapper = document.createElement("div");
		weatherWrapper.className = "weather-wrapper";

		weatherWrapper.append(weatherMarkUp, image);

		modal.append(titleWeather, weatherWrapper);

		this.#area.append(modal);
	}

	async trigger() {
		try {
			const data = await this.#getWeatherData("Майкоп");

			this.#displayData(
				data.name,
				this.#createMarkUpHTML(data),
				this.#getCurrentWeatherImageHTML(data)
			);
		} catch (err) {
			console.log(`ОШИБКА - ${err}`);
		}
	}
}
