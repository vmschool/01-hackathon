import { Module } from '../core/module';

export class MessageModule extends Module {
  trigger() {
    console.log('trigger MessageModule');
  }
}
