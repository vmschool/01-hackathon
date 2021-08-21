import {Module} from '../core/module'

export class ClicksModule extends Module {
  #isTimeUp;
  #count;
  #doubleCount;
  #time;

  constructor() {
    super();
    this.#isTimeUp = false;
    this.#count = 0;
    this.#doubleCount = 0;
    this.#time = 10000;
  }

  trigger() {
    super.trigger();
    this.#counterClicks(this.#time);
  }

  #counterClicks(ms) {

    document.body.addEventListener('click', this.#onClick);
    document.body.addEventListener('dblclick', this.#onDblclick);

    setTimeout(() => {
      this.#isTimeUp = true;
      alert(`Время закончилось. Ваш результат: ${this.#count} одиночных кликов и ${this.#doubleCount} двойных кликов за ${this.#time / 1000} секунд.`);
    }, ms);
  }

  #onClick = () => {
    if (this.#isTimeUp) return;
    console.log('this.#count:', this.#count);
    this.#count++;
  }

  #onDblclick = () => {
    if (this.#isTimeUp) return;
    console.log('this.#doubleCount:', this.#doubleCount);
    this.#doubleCount++;
  }
}