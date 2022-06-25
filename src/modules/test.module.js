import { Module } from "../core/module";

export class TestModule extends Module {
  constructor() {
    super("test", "test");
  }
  trigger() {
    console.log("test");
  }
}
