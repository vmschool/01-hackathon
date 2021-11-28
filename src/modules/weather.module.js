import { Module } from '../core/module';
import { Popup } from '../components/popup';
import keys from '../api/keys.json';

export class WeatherModule extends Module {
    #popup;

    constructor() {
        super('WeatherModule', 'Show weather');
        this.#popup = new Popup(null, '');
    }

    createLoader() {
        const loader = document.createElement('div');
        loader.className = 'lds-ripple';
        loader.innerHTML = '<div></div><div></div>';

        return loader;
    }

    async requestData(lat, long) {
        const resp = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${keys.weatherKey}&q=${lat},${long}&aqi=no`
        );
        if (!resp.ok) throw new Error('request failed');
        const data = await resp.json();

        return data;
    }

    createContent(data) {
        const container = document.createElement('div');
        container.classList.add('flex');

        const img = document.createElement('img');
        img.src = data.current.condition.icon;
        img.classList.add('block');

        const text = document.createElement('div');
        const state = document.createElement('h3');
        state.textContent = data.current.condition.text;

        const temp = document.createElement('p');
        temp.textContent = `${data.current.temp_c}ºC`;

        text.append(state, temp);
        container.append(img, text);

        return container;
    }

    async showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
            const data = await this.requestData(latitude, longitude);
            const content = this.createContent(data);

            this.#popup.update(content.outerHTML, `${data.location.country}, ${data.location.name}`);
        } catch (error) {
            this.#popup.update(`Error: ${error}`);
        }
    }

    showMistake() {
        this.#popup.update("You browser doesn't support geolocation data");
    }

    trigger() {
        this.#popup.setHeader('Weather App');
        this.#popup.setContent(this.createLoader());
        this.#popup.open();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => this.showPosition(position));
        } else {
            this.showMistake();
        }
    }
}
