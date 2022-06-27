import { Module } from '../core/module';
import { clickCount } from '../utils';
import { createCross } from '../utils';
import { closeByCross } from '../utils';

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.clickCounter = -1;
    this.dblClickCounter = 0;
    this.startTime = 10;
    this.intervalId = 0;
  }

  render() {
    const modal = document.createElement('div');
    modal.className = 'timer-modal-item';

    const crossBlock = createCross();

    const startButton = document.createElement('button');
    startButton.className = 'start-button';
    startButton.setAttribute('type', 'button');
    startButton.textContent = 'Start Timer';
    startButton.id = '1';

    const timerBlockContainer = document.createElement('div');

    const circleBlock = document.createElement('div');
    circleBlock.className = 'circle-progress';
    circleBlock.style.background = `conic-gradient(#7d2ae8, ${
      this.startTime * (360 / this.startTime)
    }deg, #ededed 0deg)`;

    const progressValueSpan = document.createElement('span');
    progressValueSpan.className = 'progress-value';
    progressValueSpan.textContent = '10';

    const textSpan = document.createElement('span');
    textSpan.className = 'text';
    textSpan.textContent = 'seconds';

    timerBlockContainer.className = 'timer-container';

    circleBlock.append(progressValueSpan);
    timerBlockContainer.append(circleBlock);
    timerBlockContainer.append(textSpan);

    modal.append(timerBlockContainer);
    modal.append(startButton);
    modal.append(crossBlock);

    document.querySelector('#area').append(modal);
  }

  startButton() {
    const modal = document.querySelector('.timer-modal-item');

    const scoreInfo = document.createElement('div');
    scoreInfo.className = 'score-info';

    const clickScoreSpan = document.createElement('span');
    clickScoreSpan.className = 'click-score';
    clickScoreSpan.textContent = 'Click Score: 0';

    const dblClickScoreSpan = document.createElement('span');
    dblClickScoreSpan.className = 'dblclick-score';
    dblClickScoreSpan.textContent = 'Double Click Score: 0';
    scoreInfo.append(clickScoreSpan, dblClickScoreSpan);

    const startButton = document.querySelector('.start-button');

    const startLisner = () => {
      if (event.target.className === 'start-button') {
        this.decreaseTimer();
        this.counter();
        startButton?.remove();
        startButton?.removeEventListener('click', (event) => {
          startLisner();
        });
        modal.append(scoreInfo);
      }
    };

    startButton.addEventListener('click', (event) => {
      startLisner();
    });
  }

  decreaseTimer() {
    const modal = document.querySelector('.timer-modal-item');
    const circleProgress = document.querySelector('.circle-progress');
    const progressValue = document.querySelector('.progress-value');

    const totalTime = this.startTime;

    let progress = setInterval(() => {
      this.startTime--;
      this.intervalId = progress;

      progressValue.textContent = `${this.startTime}`;
      circleProgress.style.background = `conic-gradient(#7d2ae8, ${
        this.startTime * (360 / totalTime)
      }deg, #ededed 0deg)`;

      if (this.startTime === 0) {
        progressValue.textContent = 'Time is up';
        modal.style.justifyContent = 'center';
        clearInterval(progress);

        setTimeout(() => {
          this.removeModal(); //modal.remove();
        }, 3000);
      }
    }, 1000);
  }

  counter() {
    const modal = document.querySelector('.timer-modal-item');
    modal.addEventListener('click', clickCount.bind(this, false));
    modal.addEventListener('dblclick', clickCount.bind(this, true));
  }

  close() {
    const crossBtn = document.querySelector('.cross-block');
    crossBtn.addEventListener('click', (event) => {
      this.removeModal();
    });
  }

  removeModal() {
    const modal = document.querySelector('.timer-modal-item');
    const startButton = modal?.querySelector('.start-button');
    const crossBtn = document.querySelector('.cross-block');

    startButton?.removeEventListener('click', (event) => {
      startLisner();
    });
    crossBtn.removeEventListener('click', (event) => {
      this.removeModal();
    });
    modal?.removeEventListener('click', clickCount.bind(this, false));
    modal?.removeEventListener('dblclick', clickCount.bind(this, true));
    modal?.remove();
  }

    trigger(event) {
        const clickModalItem = document.querySelector('[data-type = "clickModule"]');
        if (this.intervalId !== 0) {
        clearInterval(this.intervalId);
        }

        const modal = document.querySelector('.timer-modal-item');
        this.clickCounter = -1;
        this.dblClickCounter = 0;
        this.startTime = 10;

        if (modal) {    
            modal.remove()
        }

        this.render();
        this.close();
        this.startButton();
    }
}
