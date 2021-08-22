import { Module } from "../core/module";
import { randomImages } from "../utils";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";

export class JokeModule extends Module {
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

      this.id = data.id;

      this.sendRequest2();
    } catch (error) {}
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

      setTimeout(() => {
        document.body.addEventListener("click", () => {
          window.location.reload();
        });
      }, 2000);
    } catch (error) {}
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

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }

  addItemInMenuList() {
    return {
      text: this.toHTML.bind(this),
      trigger: this.#trigger.bind(this),
    };
  }
}
