import { Module } from '../core/module';
import { createCross, closeByCross } from '../utils';
import {
  renderTimer,
  getTime,
  calcTime,
  createSpan,
} from '../timer.utils/timer.utils';

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.startTime = 5000;
    this.timerId = 0;
  }

  render() {
    renderTimer();

    const block = document.querySelector('.countdown-wrapper');
    const crossBlock = createCross();

    block.append(crossBlock);
  }

  getValue() {
    let value = 0;
    const submitButton = document.querySelector('.submit-time-button');
    const getStartTime = () => {
      const inputValue = document.querySelector('.time-input');
      value = +inputValue.value;
      this.startTime = value;

      if (value >= 0) {
        this.decreaseTimer();
      }
    };

    submitButton.addEventListener('click', (event) => {
      //лиснер 1
      getStartTime();
    });
  }

  decreaseTimer() {
    const countdown = () => {
      const countdown = document.querySelector('.countdown-wrapper');
      const timerButtonText = countdown.querySelector('.submit-time-button');
      timerButtonText.textContent = 'Reset Timer';
      const timerContainer = document.querySelector('.countdown-timer');
      const modal = document.querySelector('.modal-window');
      const gap = this.startTime;
      this.startTime = gap - 1000;

      if (this.startTime < 0) {
        clearInterval(start);

        setTimeout(() => {
          modal?.remove();
          countdown.append(createSpan());

          setTimeout(() => {
            this.removeModal(); //countdown.remove();
          }, 1000);
        }, 1000);
      }

      calcTime(gap);
    };

    const start = setInterval(countdown, 1000);
    this.timerId = start;
  }

  close() {
    const crossBtn = document.querySelector('.cross-block');
    // const modal = document.querySelector('.countdown-wrapper');
    const closeByBtn = () => {
      this.removeModal(); //closeByCross('.countdown-wrapper');
      clearInterval(this.timerId);
    };
    crossBtn.addEventListener('click', (event) => {
      // лиснер 2
      closeByBtn();
    });
  }


  removeModal() {
    const submitButton = document.querySelector('.submit-time-button');
    const crossBtn = document.querySelector('.cross-block');
    const countdown = document.querySelector('.countdown-wrapper');

    submitButton?.removeEventListener('click', (event) => {
      getStartTime();
    });
    crossBtn?.removeEventListener('click', (event) => {
      closeByBtn();
    });

    countdown.remove();
  }


  trigger(event) {

    const clickModalItem = document.querySelector('[data-type = "timer"]');
      const countdown = document.querySelector('.countdown-wrapper');
      const isModal = document.querySelector('.modal-window');

      if (!countdown) {
        this.render();
        this.close();
      }

      if (!isModal) {
        getTime();
      }

      const submitButton = document.querySelector('.submit-time-button');
      let value = 0;
      submitButton.addEventListener('click', (event) => {
        this.isThereInterval();

        const inputValue = document.querySelector('.time-input');
        value = +inputValue.value;
        this.startTime = value * 1000;
        this.decreaseTimer();
      });
  }

  isThereInterval() {
    if (this.timerId !== 0) {
      clearInterval(this.timerId);
    }
  }
}