import { Module } from "../core/module";
import { createModal, getArea, WEATHER_API_KEY, WEATHER_API_URL } from "../utils";

export default class WeatherModule extends Module {
	#area;
	#modal;
	#form;
	constructor(type, text) {
		super(type, text);
		this.#area = getArea();
		this.#modal = createModal("weather-modal");
		this.#form = document.createElement("form");
		this.#initiateListener();
	}

	static async #getWeatherData(city) {
		try {
			const data = await fetch(
				`${WEATHER_API_URL}${city}&lang=ru&units=metric&appid=${WEATHER_API_KEY}`
			);
			return await data.json();
		} catch (err) {
			console.error(`ОШИБКА - ${err}`);
		}
	}

	static #createMarkUpHTML(data) {
		const divWeather = document.createElement("div");
		divWeather.className = "weather";

		const statusWeather = document.createElement("p");
		statusWeather.className = "statusWeather";
		statusWeather.textContent = `Погода:`;
		const statusWeatherSpan = document.createElement("span");
		statusWeatherSpan.textContent = `${data.weather[0].description}`;
		statusWeather.append(statusWeatherSpan);

		const temperatureWeather = document.createElement("p");
		temperatureWeather.className = "temperatureWeather";
		temperatureWeather.textContent = `Температура:`;
		const temperatureWeatherSpan = document.createElement("span");
		temperatureWeatherSpan.textContent = `${data.main.temp} °C`;
		temperatureWeather.append(temperatureWeatherSpan);

		const humidityWeather = document.createElement("p");
		humidityWeather.className = "humidityWeather";
		humidityWeather.textContent = `Влажность:`;
		const humidityWeatherSpan = document.createElement("span");
		humidityWeatherSpan.textContent = `${data.main.humidity} %`;
		humidityWeather.append(humidityWeatherSpan);

		const windWeather = document.createElement("p");
		windWeather.className = "windWeather";
		windWeather.textContent = `Ветер:`;
		const windWeatherSpan = document.createElement("span");
		windWeatherSpan.textContent = `${data.wind.speed} км/ч`;
		windWeather.append(windWeatherSpan);

		divWeather.append(
			statusWeather,
			temperatureWeather,
			humidityWeather,
			windWeather
		);

		return divWeather;
	}

	#initiateListener() {
		this.#form.addEventListener("submit", (event) => {
			event.preventDefault();
			const inputField = document.querySelector(".starterWeatherInput");
			if (!isNaN(inputField.value) || inputField.value.length < 1) {
				document.querySelector(".starterWeatherTitle").textContent =
					"Введите название города.";
				return;
			}

			WeatherModule.#getWeatherData(inputField.value).then((response) => {
				if (response.code === 404) return;
				this.#modal.style.width = `350px`;
				const data = response;
				setTimeout(() => {
					this.#getWeatherMarkup(
						data.name,
						WeatherModule.#createMarkUpHTML(data),
						WeatherModule.#getCurrentWeatherImageHTML(data)
					);
				}, 400);
			});

			inputField.value = "";
		});
	}

	static #getCurrentWeatherImageHTML(data) {
		const image = document.createElement("img");
		image.className = "weatherImage";
		image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

		return image;
	}

	#getWeatherMarkup(cityName, weatherMarkUp, image) {
		this.#reset();

		const titleWeather = document.createElement("h2");
		titleWeather.className = "titleWeather";
		titleWeather.textContent = `Город ${cityName}`;

		const weatherWrapper = document.createElement("div");
		weatherWrapper.className = "weather-wrapper";

		weatherWrapper.append(weatherMarkUp, image);

		this.#modal.append(titleWeather, weatherWrapper);

		// this.#area.append(this.#modal);
	}

	#getStarterWindow() {
		this.#modal = createModal("weather-modal");
		this.#modal.style.width = `220px`;

		this.#form.className = "starterWeatherMarkup";

		const starterTitle = document.createElement("h1");
		starterTitle.className = "starterWeatherTitle";
		starterTitle.textContent = "Введите город";

		const starterInput = document.createElement("input");
		starterInput.className = "starterWeatherInput";

		starterInput.type = "text";

		const starterButton = document.createElement("button");
		starterButton.className = "starterWeatherButton";
		starterButton.type = "submit";
		starterButton.value = "Check";
		starterButton.textContent = "Узнать погоду";

		this.#form.append(starterTitle, starterInput, starterButton);
		this.#modal.append(this.#form);
	}

	#reset() {
		this.#form.innerHTML = "";
		this.#form.remove();
	}

	async trigger() {
		try {
			if (document.querySelector("#weather-modal")) return;

			this.#reset();
			this.#getStarterWindow();

			this.#area.append(this.#modal);
		} catch (err) {
			console.log(`ОШИБКА - ${err}`);
		}
	}
}
