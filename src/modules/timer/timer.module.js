import './timer.module.style.css';
import {Module} from '../../core/module';

export class TimerModule extends Module {
  #texts

  static TYPE = 'TimerModule';
  static TEXT = 'Установить таймер';

  constructor() {
    super(TimerModule.TYPE, TimerModule.TEXT);

    this.#texts = {
      start: 'Введите время в секундах:',
      end: 'Время вышло!',
      error: 'Введите корректное значение времени в секундах!'
    }
  }

  trigger() {
    const popup = document.createElement('div');
    popup.className = 'timer-popup';
    popup.innerHTML = `
      <button class="timer-btn--close">✖</button>
      <p class="timer-text">${this.#texts.start}</p>
      <input type="number" class="timer-input" min="1" max="3599" value="10" placeholder="0" required>
      <button type="button" class="timer-btn timer-btn--start"></button>`;

    document.body.appendChild(popup);

    const input = popup.querySelector('.timer-input');
    const submit = popup.querySelector('.timer-btn--start');

    input.focus();

    submit.addEventListener('click', (event) => {
      event.preventDefault();
      this.time = input.value;
      this.check();
    })

    this.close();
  }

  check() {
    if (this.time !== null && !isNaN(this.time)) {
      if (this.time <= 0) {
        alert(this.#texts.error);
      } else if (this.time < 3600) {
        this.render();
      } else {
        this.time = 3599;
        this.render();
      }
    } else if (isNaN(this.time)) {
      alert(this.#texts.error);
    }
  }

  close() {
    const popup = document.body.querySelector('.timer-popup');
    const close = popup.querySelector('.timer-btn--close');

    close.addEventListener('click', (event) => {
      event.preventDefault();
      popup.remove();
    })

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        popup.remove();
      }
    })
  }

  render() {
    if (document.body.querySelector('.timer-popup')) {
      document.body.querySelector('.timer-popup').remove();
    }

    const timer = document.createElement('div');
    timer.className = 'timer';
    timer.innerHTML = `
      <span class="timer-part timer-minutes">00</span>
			<span class="timer-part">:</span>
			<span class="timer-part timer-seconds">00</span>
			<button type="button" class="timer-btn timer-btn--cancel"></button>`;

    document.body.appendChild(timer);

    this.start();
    this.update();
    this.cancel();
  }

  start() {
    this.interval = setInterval(() => {
      this.time--;
      this.update();

      if (this.time === 0) {
        this.stop();
      }
    }, 1000);
  }

  update() {
    this.minutes = document.body.querySelector('.timer-minutes');
    this.seconds = document.body.querySelector('.timer-seconds');

    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;

    this.minutes.textContent = minutes.toString().padStart(2, '0');
    this.seconds.textContent = seconds.toString().padStart(2, '0');
  }

  stop() {
    alert(this.#texts.end);
    this.clear();
  }

  cancel() {
    this.cancelBtn = document.body.querySelector('.timer-btn');
    this.cancelBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.clear();
    });
  }

  clear() {
    clearInterval(this.interval);
    this.interval = null;
    document.body.querySelector('.timer').remove();
  }
}
