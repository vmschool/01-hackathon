import { Module } from '../core/module';
import { Popup } from '../components/popup';
import keys from '../api/keys.json';

export class WeatherModule extends Module {
    constructor() {
        super('WeatherModule', 'Show weather');
    }

    async requestData(lat, long) {
        const resp = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${keys.weatherKey}&q=${lat},${long}&aqi=no`
        );
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

        const data = await this.requestData(latitude, longitude);
        const content = this.createContent(data);

        const popup = new Popup(content, `${data.location.country}, ${data.location.name}`);
        popup.open();
    }

    showMistake() {
        const popup = new Popup("You browser doesn't support geolocation data", 'Weather');
        popup.open();
    }

    trigger() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => this.showPosition(position));
        } else {
            this.showMistake();
        }
    }
}
