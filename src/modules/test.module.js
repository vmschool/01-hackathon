import { Module } from '../core/module';
import ModalWindow from '../components/modal-window';

export class TestModule extends Module {

  trigger() {
    const modal = new ModalWindow('text');
    console.log('test');
    modal.open();
  }
}
