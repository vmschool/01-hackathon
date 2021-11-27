import { Module } from "../core/module";

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    alert("Shape test");
  }
}
