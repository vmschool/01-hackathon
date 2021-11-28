import { bgColors } from './sourceData';
import {
  random
} from './utils';

export class StartScreen {
  interval;

  getRandomColor() {
    let randomNumber = random(0, bgColors.length - 1);
    const color = bgColors[randomNumber];
    randomNumber = random(3, 5);
    const className = `bg-${color}-${randomNumber * 100}`;
    return className;
  }

  startColoring() {
    this.interval = setInterval(() => {
      const randomColor = bgColors[random(0, bgColors.length - 1)];
      const randNumber = random(3, 5);

      let className = this.getRandomColor();
      while (document.body.className === className) {
        className = this.getRandomColor();
      }

      document.body.className = className;
    }, 600);
  }

  startApp() {
    clearInterval(this.interval);
    console.log(this.interval);
    document.querySelector('.container').remove();
  }

  show() {
    document.body.className = 'bg-blue-400 transition-all';

    const container = document.createElement('div');
    container.className = 'container w-full h-full flex justify-center items-center flex-col transition-all';

    const title = document.createElement('h1');
    title.textContent = 'Context Menu App'
    title.className = 'text-6xl text-white mb-3 font-light tracking-wider';

    const text = document.createElement('ul');
    text.className = 'text-lg text-white mb-9 font-bold tracking-wider'
    text.textContent = 'Click start to run App';

    const startBtn = document.createElement('button');
    startBtn.className = 'bg-white px-20 py-2 text-gray-700 text-lg rounded tracking-wider hover:scale-105 transform transition-all';
    startBtn.textContent = 'Start';
    startBtn.addEventListener('click', this.startApp.bind(this));

    container.append(title, text, startBtn);

    document.body.append(container);

    this.startColoring()
  }
}
