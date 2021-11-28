import {Module} from '../core/module';
import {Popup} from '../components/popup';
import {random} from '../utils';

export class RandomGameModule extends Module {
  #popup;

  constructor() {
    super('Random Game Module', 'Guess random number');
    this.#popup = new Popup(null, 'Random Game');
  }

  createContent() {
    const randomNumber = random(0, 10);

    const container = document.createElement('div');

    const text = document.createElement('p');
    text.textContent = 'Guess number from 0 to 10';

    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'number';

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'guess';
    submitBtn.addEventListener('click', () => {
      if (randomNumber === Number(input.value)) {
        this.#popup.update(`You have guessed number ${randomNumber}`);
      } else {
        this.#popup.update(`Sorry, you didn\'t guess number ${randomNumber}`);
      }
    });

    container.append(text, input, submitBtn);
    return container;
  }

  trigger() {
    const content = this.createContent();
    this.#popup.setContent(content);
    this.#popup.open();
  }
}
