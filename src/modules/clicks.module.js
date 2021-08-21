import { Module } from '@/core/module'

const TIME = 10000;

export class ClicksModule extends Module {
  #container
  #isTimeUp;
  #count;
  #doubleCount;
  #time;
  #displayValues;
  #displayText;

  constructor(type, text) {
    super(type, text);
    this.#container = document.body;
    this.#isTimeUp = false;
    this.#count = -1;
    this.#doubleCount = 0;
    this.#time = TIME;
    this.#displayValues = document.createElement('div');
    this.#displayValues.dataset.type = this.type;
    this.#displayValues.className = `module-${ this.type }`;
    this.#displayText = document.createElement('h1');

    this.#container.addEventListener('contextmenu', () => {
      this.close();
    });
  }


  trigger() {
    this.#counterClicks(this.#time);
    this.#render();
  }

  #counterClicks(ms) {

    this.#container.addEventListener('click', this.#onClick);
    this.#container.addEventListener('dblclick', this.#onDblclick);
    this.#container.onmousedown = () => false;

    setTimeout(() => {
      this.#isTimeUp = true;
      this.#displayText.textContent =`Время закончилось. Ваш результат: ${this.#count} кликов за ${this.#time / 1000} секунд, из которых ${this.#doubleCount} были двойными кликами.`;
    }, ms);
  }

  #render() {
    this.#container.append(this.#displayValues);
    this.#displayValues.append(this.#displayText);
    this.#displayText.textContent = this.getText();
  }

  getText() {
    return `Ваш текущий результат: ${this.#count} одиночных кликов, включая ${this.#doubleCount} двойных кликов`;
  }

  #onClick = () => {
    if (this.#isTimeUp) return;
    console.log('this.#count:', this.#count);
    this.#count++;
    this.#displayText.textContent = this.getText();
  }

  #onDblclick = () => {
    if (this.#isTimeUp) return;
    console.log('this.#doubleCount:', this.#doubleCount);
    this.#doubleCount++;
    this.#displayText.textContent = this.getText();
  }

  close() {
    this.#displayValues.remove();
  }
}