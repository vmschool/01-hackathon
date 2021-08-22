import menu from "../app";
import { Module } from "../core/module";
import { randomImages } from "../utils";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";

class JokeModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.category = "programming"; //any
    this.url = `https://v2.jokeapi.dev/joke/${this.category}`;

    this.imageUrl = "";
    this.id = "";
    this.setup = "";
    this.delivery = "";
    this.joke = "";
  }

  sendRequest = async () => {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const data = await response.json();
      this.joke = data.joke || "";
      this.setup = data.setup || "";
      this.delivery = data.delivery || "";

      //data.joke ? (this.joke = data.joke) : (this.joke = "");
      //data.setup ? (this.setup = data.setup) : (this.setup = "");
      //data.delivery ? (this.delivery = data.delivery) : (this.delivery = "");

      this.id = data.id;

      this.sendRequest2();
    } catch (error) {
      console.log("error1");
    }
  };

  sendRequest2 = async () => {
    try {
      let my_key = "22726779-5ea117f2beee7c3a85fd732ea";
      let url_pixibay = `https://pixabay.com/api/?key=${my_key}&q=${this.category}&image_type=photo&per_page=200`;
      let random = randomImages(1, 200);
      const response = await fetch(url_pixibay);
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const data = await response.json();
      this.imageUrl = data.hits[random].largeImageURL;

      this.createModule();
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
                <div class="card text-dark bg-light mb-3" style="width: 18rem;">
                    <img src="${this.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Шутка № ${this.id}</h5>
                      
                     </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><p> ${this.joke}${this.setup}</p><p>${this.delivery}</p></li>
                       
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
    menu.add(`Шутка`, this.#trigger.bind(this));
  }
}

export const jokeModule = new JokeModule("type", "text");
