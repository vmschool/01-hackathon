import {Module} from '@/core/module';

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.clickCounter = 0;
        this.dblClickCounter = 0;
        this.time = 10;
    }
    toHTML() {
        return super.toHTML();
    }
    trigger() {
        return new Promise(() => {
            const clickModalItem = document.querySelector("[data-type = 'clickModule']");
            clickModalItem.addEventListener('click', (event) => {
                event.preventDefault()
                const modals = document.querySelectorAll('.modalItem');
                this.time = 10;
                this.clickCounter = 0;
                this.dblClickCounter = 0;
                if (modals) {
                    modals.forEach((el) => {
                        el.remove();
                    })
                    this.removeModal();
                    this.render(`Анализ кликов за 10 секунд.\n`);
                    this.startButton();
                } else {
                    this.render(`Анализ кликов за 10 секунд.\n`);
                    this.startButton();
                }
            })
        })
    }
    startButton () {
        const startButton = document.querySelector('.startButton');
        startButton.addEventListener('click', () => {
            startButton.style.opacity = 0;
            this.counter();
        })
    }

    counter () {
            this.startTimerForRemoveModal();
            const modal = document.querySelector('.modalItem');
            modal.addEventListener('click', () => {
                this.time === 0 ? this.clickCounter : this.clickCounter++;
            })
            modal.addEventListener('dblclick', () => {
                this.time === 0 ? this.dblClickCounter : this.dblClickCounter++;
            })
    }

    setTime (value) {
        const timeToEnd = document.querySelector('#timer');
        timeToEnd.innerHTML = `${value}`;
    }

    setCount () {
        const count = document.querySelector('#count');
        count.innerHTML = `<br><br>Количество одинарных кликов: ${this.clickCounter}<br>Количество двойных кликов: ${this.dblClickCounter}`
    }

    startTimerForRemoveModal () {
        const timer = setInterval(() => {
            if (this.time === 0) {
                clearInterval(timer);
                this.setCount();
                setTimeout(() => {
                   this.removeModal();
                }, 2500)
            } else {
                this.decreaseTimer();
            }
        }, 1000)
    }

    decreaseTimer () {
        this.time -= 1;
        this.setTime(this.time);
    }

    render (title) {
        const cardForContextMenu = document.querySelector('.cardForContextMenu');
        const modal = document.createElement('div');
        modal.className = 'modalItem';
        const titleInModal = document.createElement('div');
        titleInModal.id = 'titleInModal'
        const titleInModalH1 = document.createElement('h1');
        titleInModalH1.innerHTML = `${title}<br>Осталось <strong><span id="timer">10</span></strong> секунд<br><span id="count"></span>`;
        titleInModal.appendChild(titleInModalH1);
        const startButton = document.createElement('button');
        startButton.className = 'startButton';
        startButton.innerHTML = `<strong>Пуск</strong>`;
        modal.append(titleInModal, startButton);
        cardForContextMenu.appendChild(modal);
    }

    removeModal () {
        const modal = document.querySelectorAll('.modalItem');
        modal.forEach((el) => {
            el.remove();
        })
    }
}