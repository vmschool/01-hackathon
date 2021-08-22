import { Module } from "../core/module";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";

export class CityModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.city = "";
    this.country_name = "";
    this.ip = "";
    this.zip_code = "";
    this.longitude = "";
    this.latitude = "";
    this.url = `https://freegeoip.app/json/`;

    this.imageUrl = "";
  }

  sendRequest = async () => {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const data = await response.json();
      this.city = data.city;
      this.country_name = data.country_name;
      this.ip = data.ip;
      this.zip_code = data.zip_code;
      this.longitude = data.longitude;
      this.latitude = data.latitude;
      this.description = "";

      this.sendRequest2(this.city);
    } catch (error) {
      console.log("error1");
    }
  };

  sendRequest2 = async (city) => {
    try {
      let my_key = "22726779-5ea117f2beee7c3a85fd732ea";
      let url_pixibay = `https://pixabay.com/api/?key=${my_key}&q=${city}&image_type=photo&per_page=3`;
      const response = await fetch(url_pixibay);
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const data = await response.json();
      this.imageUrl = data.hits[0].largeImageURL;

      this.sendRequest3(city);
    } catch (error) {
      console.log("error2");
    }
  };

  sendRequest3 = async (city) => {
    try {
      let url_wikipedia = `https://ru.wikipedia.org/api/rest_v1/page/summary/${city}`;
      const response = await fetch(url_wikipedia);
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const data = await response.json();
      this.description = data.extract;

      this.createModule();

      setTimeout(() => {
        document.body.addEventListener("click", () => {
          window.location.reload();
        });
      }, 2000);
    } catch (error) {
      console.log("error2");
    }
  };

  createModule() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div class="container-fluid">
         <div class="row justify-content-md-center">
            <div class="col-md-auto">
                <div class="card text-dark bg-light mb-3" style="width: 36rem;">
                    <img src="${this.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this.city}</h5>
                         <p class="card-text">${this.description} </p>
                     </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Ваша страна:</strong> ${this.country_name}</li>
                        <li class="list-group-item"><strong>Ваш ip адрес:</strong> ${this.ip}</li>
                        <li class="list-group-item"><strong>Ваш почтовый индекс:</strong> ${this.zip_code}</li>
                        <li class="list-group-item"><strong>Долгота:</strong> ${this.longitude}</li>
                        <li class="list-group-item"><strong>Широта:</strong> ${this.latitude}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
    );
  }

  #trigger = () => {
    this.sendRequest();
  };

  addItemInMenuList() {
    return {
      text: this.toHTML.bind(this),
      trigger: this.#trigger.bind(this),
    };
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}
