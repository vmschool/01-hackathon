import { Module } from "../core/module";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";

export class СurrencyModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.baseCurrency = "";
    this.currency = "";
    this.date = "";
    this.url = `https://api.exchangerate-api.com/v4/latest/USD`;
  }

  sendRequest = async () => {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const money = await response.json();
      this.currency = money.rates.RUB;
      this.date = money.date;
      this.baseCurrency = money.base;
      this.createModule();

      setTimeout(() => {
        document.body.addEventListener("click", () => {
          window.location.reload();
        });
      }, 2000);
    } catch (error) {
      console.log("error");
    }
  };

  createModule() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div class="container-fluid">
         <div class="row justify-content-md-center">
            <div class="col-md-auto">
                <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">Курс 1 ${this.baseCurrency} на ${this.date}</div>
                <div class="card-body">
                <h2 class="card-title">${this.currency} RUB</h2>
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
