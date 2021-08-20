import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = ["Включить слайдер", "Создать фигуру", "Кастомное сообщение", "Собственный модуль"];
    this.backgroundModule = new BackgroundModule();
  }

  close() {
    document.getElementById("menu").style.display = "none";
  }

  open(e) {
    e.preventDefault();
    if (document.getElementById("menu").style.display != "block") {
      let newmenu = document.getElementById("menu");
      newmenu.style.display = "block";
      newmenu.style.left = e.pageX + "px";
      newmenu.style.top = e.pageY + "px";
    }
    let newmenu = document.getElementById("menu");
    newmenu.addEventListener("click", (e) => {
      let fn = e.target.id;
      switch (fn) {
        case "0":
          this.backgroundModule.render();
          break;
        case "1":
          console.log(this.modules[1]);
          break;
        case "2":
          console.log(this.modules[2]);
          break;
        case "3":
          console.log(this.modules[3]);
          break;
      }

      if (e.target.id === "0") {
        this.backgroundModule.render();
      }
    });
  }
  render() {
    const getMenu = document.querySelector("#menu");
    const getElements = this.modules.map((el, index) => `<li class="menu-item" id='${index}'>${el}</li>`);
    getMenu.insertAdjacentHTML("afterbegin", getElements.join(""));

    document.onclick = this.close;
    document.oncontextmenu = this.open.bind(this);
  }
}
