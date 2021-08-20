import { Module } from '../core/module';

export class TestModule extends Module {

  trigger() {
    console.log('test from test');
  }
}
