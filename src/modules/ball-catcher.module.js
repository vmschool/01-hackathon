import {Module} from '../core/module'
import {random} from '../utils'

export class BallCatcherModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  createBallCatcherBlock() {
    const timeArray = [10, 20, 30, 40, 50]

    const ballCatcherContainerHTML = document.createElement('div');
    ballCatcherContainerHTML.id = 'ball-catcher-container'
    const boardWrapHTML = document.createElement('div');
    boardWrapHTML.className = 'screen';

    const timeCounterHTML = document.createElement('h3');
    timeCounterHTML.className = 'title-counter'
    timeCounterHTML.textContent = 'Обратный отсчет';

    const timeCounterSpanHTML = document.createElement('span');
    timeCounterSpanHTML.id = 'time'
    timeCounterHTML.textContent = '00:00';

    const boardHTML = document.createElement('span');
    boardHTML.id = 'board';
    boardHTML.className = 'board';

    const startBtnHTML = document.createElement('button');
    startBtnHTML.textContent = 'Начать игру'
    startBtnHTML.id = 'start';

    const timeListHTML = document.createElement('ul');
    timeListHTML.id = 'time-list';
    timeListHTML.className = 'time-list';

    timeArray.forEach((item) => {
      const setTimeBtn = document.createElement('button');
      setTimeBtn.className = 'time-btn';
      setTimeBtn.setAttribute('data-time', `${item}`);
      setTimeBtn.textContent = `${item}`;

      const timeListItemHTML = document.createElement('li');
      timeListItemHTML.append(setTimeBtn);
      timeListHTML.append(timeListItemHTML);
    })

    const btnGameAgain = document.createElement('button');
    btnGameAgain.style.opacity = '0';
    btnGameAgain.id = 'new-game';
    btnGameAgain.className = 'new-game';
    btnGameAgain.textContent = 'Закрыть окно'



    timeCounterHTML.append(timeCounterSpanHTML)
    boardWrapHTML.append(timeCounterHTML, boardHTML, startBtnHTML, timeListHTML, btnGameAgain)
    ballCatcherContainerHTML.append(boardWrapHTML)


    return ballCatcherContainerHTML

  }


  listener () {
    const ballCatcherItem = document.querySelector('[data-type="ball-catcher"]');
    ballCatcherItem.addEventListener('click', (event) => {
      this.trigger();
    })
  }

  trigger() {
    const isBallCatcherContainer = document.querySelector('#ball-catcher-container');
    if (!isBallCatcherContainer) {
      document.querySelector('#area').append(this.createBallCatcherBlock());
    }


    const colors = ['#83B799', '#E2CD6D', '#C2B28F', '#E4D8B4', '#E86F68', '#f87171',
      '#fb923c', '#ea580c', '#65a30d', '#065f46', '#2563eb', '#6d28d9', '#86198f']

    let time = 0
    let score = 0


    const newGame = document.querySelector('#new-game');
    const startBtn = document.querySelector('#start');
    const timeList = document.querySelector('#time-list');
    const timeEl = document.querySelector('#time');
    const board = document.querySelector('#board');
    const titleCounter = document.querySelector('.title-counter');
    console.log('titleCounter', titleCounter)

    startBtn.addEventListener('click', (event) => {
      event.preventDefault();
      startBtn.style.display = 'none';
      timeList.style.display = 'flex';
    });

    timeList.addEventListener('click', event => {
      if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        timeList.style.display = 'none';
        startGame()
      }
    });

    board.addEventListener('click', event => {
      if (event.target.classList.contains('circle')) {
        score++
        event.target.remove();
        createRandomCircle();
      }
    });

    function startGame() {
      setInterval(decreaseTime, 1000);
      createRandomCircle();
      setTime(time);
    }

    function decreaseTime() {
      if (time === 0) {
        finishGame()
      } else {
        let current = --time
        if (current < 10) {
          current = `0${current}`
        }
        setTime(current)
      }

    }

    function setTime(value) {
      timeEl.innerHTML = `:${value}`
    }

    function finishGame() {
      timeEl.parentNode.classList.add('hide')
      board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
      titleCounter.style.display = 'none';
      newGame.style.opacity = '1'
      newGame.addEventListener('click', (event) => {
        location.reload()

      })
    }

    function createRandomCircle() {
      const circle = document.createElement('div')
      const size = getRandomNumber(10, 60)
      const {width, height} = board.getBoundingClientRect()
      const x = getRandomNumber(0, width - size)
      const y = getRandomNumber(0, height - size)
      const backgroundColor = getRandomColor()

      circle.classList.add('circle')
      circle.style.background = `${backgroundColor}`
      circle.style.width = `${size}px`
      circle.style.height = `${size}px`
      circle.style.top = `${y}px`
      circle.style.left = `${x}px`
      board.append(circle)

    }

    function getRandomNumber(min, max) {
      return Math.round(Math.random() * (max - min) + min)
    }

    function getRandomColor () {
      const index = Math.floor(Math.random() * colors.length)
      return colors[index]
    }

  }

}