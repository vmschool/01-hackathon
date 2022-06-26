import { Module } from "../core/module";
import { getRandomColor } from "../utils";

export class BackgroundModule extends Module {
  constructor(itemsList, item) {
    super(item.id, item.name);
    this.itemsList = document.querySelector(itemsList);
    this.item = item;
  }

  trigger() {
    this.itemsList.addEventListener("click", (event) => {
      const { target } = event;
      console.log(target);
      if (target.dataset.type === this.item.id) {
        document.body.style.backgroundColor = getRandomColor();
      }
      if (document.body.style.backgroundColor !== "") {
        if (!document.querySelector(".default-theme-button")) {
          const defaultThemeButton = document.createElement("button");
          defaultThemeButton.className = "btn btn-primary default-theme-button";
          defaultThemeButton.textContent = "Default theme";
          document.body.prepend(defaultThemeButton);
          defaultThemeButton.addEventListener("click", () => {
            document.body.style.backgroundColor = "";
            defaultThemeButton.remove();
          });
        }
      }
    });
  }
}
