import {Module} from '../core/module';
import {Popup} from '../components/popup';

export class RandomGameModule extends Module {
  constructor() {
    super('Random Game Module', 'Guess random number');
  }

  createInput() {
    const inputMin = document.createElement('input');
    inputMin.type = 'number';
    inputMin.placeholder = 'min';

    const inputMax = document.createElement('input');
    inputMax.type = 'number';
    inputMax.placeholder = 'min';
  }

  trigger() {
    const popup = new Popup(null, 'Random Game');
    popup.open();
  }
}
