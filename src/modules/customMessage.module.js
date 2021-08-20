import { Module } from "@/core/module";

export default class CustomMessage extends Module {
  constructor() {
    super("Custom Message", "generate message block");
  }
  trigger() {
    console.log("object");
  }
}
