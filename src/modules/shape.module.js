import menu from "../app";
import { Module } from "../core/module";

export class ShapeModule extends Module {
  #trigger = () => {
    console.log("ffghdffd");
  };
  addItemInMenuList() {
    menu.add(`Аналитика кликов`, this.#trigger.bind(this));
  }
}

export const counterClickvvv = new ShapeModule("type", "text");
