import {Module} from '../core/module';

export class ClicksModule extends Module {
    #time
    #countFunctions

    static body = document.querySelector('body');

    static initialParams = {
        type: 'clicks-analytics',
        time: 3,
        text: `Считать клики за определенное время`,
        func: null,  
    }

    constructor() {     
        super(ClicksModule.initialParams.type, ClicksModule.initialParams.text);
        this.#countFunctions = {
            single: this.#singleCount.bind(this),
            double: this.#doubleCount.bind(this),
            wheel: this.#wheelCount.bind(this),
        }
        this.#createModal();
    }

    setClickCounts() {
        this.clickCounts = {
            singleClick: -1,
            doubleClick: 0,
            wheelClick: 0,
        }
    }

    trigger() {
        this.setClickCounts();
        const buttonStart = document.querySelector('#submitTimeClicks');
        const input = document.querySelector('#timeForClicks');
        new Promise ((resolve) => {
            this.#toggleModal();
            ClicksModule.initialParams.func = function() {
                resolve(input.value);
            };
            buttonStart.addEventListener('click', ClicksModule.initialParams.func);
        }).then((value) => {
            input.value = '';
            buttonStart.removeEventListener('click', ClicksModule.initialParams.func);
            this.#time = value || ClicksModule.initialParams.time;
            this.#toggleModal();
            // console.log(this.#time);
            setTimeout(() => this.#finish(), this.#time * 1000); 
            ClicksModule.body.addEventListener('click', this.#countFunctions.single);
            ClicksModule.body.addEventListener('dblclick', this.#countFunctions.double);
            ClicksModule.body.addEventListener('mousedown', this.#countFunctions.wheel);
        });
    }

    #finish() {
        ClicksModule.body.removeEventListener('click', this.#countFunctions.single);
        ClicksModule.body.removeEventListener('dblclick', this.#countFunctions.double);
        ClicksModule.body.removeEventListener('mousedown', this.#countFunctions.wheel);
        ClicksModule.body.append(this.#createResultDiv());
        setTimeout(() => {
            document.querySelector('.clicksAnalytics').remove();
        }, 5000);
    }

    #createResultDiv() {
        const divMain = document.createElement('div');
        divMain.className = 'clicksAnalytics';
        const divClicksResult = document.createElement('div');
        divClicksResult.className = 'clicksAnalytics-div';
        const singleClicksResult = document.createElement('p');
        singleClicksResult.textContent = `Одинарных кликов было: ${this.clickCounts.singleClick}`;
        const doubleClicksResult = document.createElement('p');
        doubleClicksResult.textContent = `Двойных кликов было: ${this.clickCounts.doubleClick}`;
        const wheelClicksResult = document.createElement('p');
        wheelClicksResult.textContent = `Кликов на колесико было: ${this.clickCounts.wheelClick}`;
        const allClicksResult = document.createElement('p');
        allClicksResult.textContent = `Всего кликов было: ${this.clickCounts.singleClick + this.clickCounts.doubleClick + this.clickCounts.wheelClick}`;
        divClicksResult.append(singleClicksResult, doubleClicksResult, wheelClicksResult, allClicksResult);
        divMain.append(divClicksResult);
        return divMain;
    }

    #createModal() {
        const divOverlay = document.createElement('div');
        divOverlay.className = 'overlay overlay--hidden';
        divOverlay.addEventListener('click', this.#toggleModal);
        divOverlay.addEventListener('click', this.#actionCancel);

        const divModal = document.createElement('div');
        divModal.className = 'modal modal--hidden';

        const divModalContents = document.createElement('div');
        divModalContents.className = 'modal__contents';

        const divModalClose = document.createElement('div');
        divModalClose.className = 'modal__close-bar';

        const span = document.createElement('span');
        span.textContent = 'X';
        span.addEventListener('click', this.#toggleModal);
        span.addEventListener('click', this.#actionCancel);
        divModalClose.append(span);

        const pHeader = document.createElement('p');
        pHeader.textContent = 'Введите время для подсчета кликов:';

        const inputTime = document.createElement('input');
        inputTime.id = 'timeForClicks';
        inputTime.type = 'number';
        inputTime.placeholder = 'по умолчанию 3 секунды';

        const buttonSubmit = document.createElement('button');
        buttonSubmit.id = 'submitTimeClicks';
        buttonSubmit.textContent = 'Старт!';

        divModalContents.append(divModalClose, pHeader, inputTime, buttonSubmit);
        divModal.append(divModalContents);

        ClicksModule.body.append(divOverlay, divModal);
    }

    #toggleModal() {
        document.querySelector('.modal').classList.toggle('modal--hidden');
        document.querySelector('.overlay').classList.toggle('overlay--hidden');
    }

    #actionCancel() {
        document.querySelector('#submitTimeClicks').removeEventListener('click', ClicksModule.initialParams.func);
        document.querySelector('#timeForClicks').value = '';
        const divCancel = document.createElement('div');
        divCancel.className = 'clicksAnalytics';
        const divCancelContent = document.createElement('div');
        divCancelContent.className = 'clicksAnalytics-div';
        const message = document.createElement('p');
        message.textContent = `Вы отменили действие`;
        divCancelContent.append(message);
        divCancel.append(divCancelContent);
        ClicksModule.body.append(divCancel);
        setTimeout(() => {
            divCancel.remove();
        }, 3000); 
    }
    
    #singleCount() {
        this.clickCounts.singleClick++;
    }
    
    #doubleCount() {
        this.clickCounts.doubleClick++;
        this.clickCounts.singleClick -= 2;
    }

    #wheelCount(event) {
        if (event.button === 1) {
            this.clickCounts.wheelClick++;
        }
    } 
}