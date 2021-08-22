import { Module } from "../core/module";
import { randomImages } from "../utils";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.word = "nature";
    this.my_key = "22726779-5ea117f2beee7c3a85fd732ea";
    this.url = `https://pixabay.com/api/?key=${this.my_key}&q=${this.word}&image_type=photo&min_width=1600&min-height=1200&per_page=20`;
  }
  sendRequest = async () => {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const picture = await response.json();

      this.changeImages(picture.hits);
    } catch (error) {
      console.log("error");
    }
  };

  changeImages(pics) {
    setInterval(() => this.setImage(pics), 3000);

    setTimeout(() => {
      document.body.addEventListener("click", () => {
        window.location.reload();
      });
    }, 2000);
  }

  setImage(pics) {
    let random = randomImages(1, 20);
    document.body.style.backgroundImage = `url(${pics[random].largeImageURL})`;
    document.body.style.backgroundSize = "cover";
  }

  addItemInMenuList() {
    menu.add(`Слайдер`, this.#trigger.bind(this));
  }

  #trigger() {
    // document.body.style.backgroundColor = "red";
    this.sendRequest();
    this.toHTML();
  }

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
