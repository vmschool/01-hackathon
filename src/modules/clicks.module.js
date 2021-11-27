import {Module} from '../core/module';

export class ClicksModule extends Module {
    #time
    #clickCounts

    static initialParams = {
        type: 'clicks-analytics',
        time: 3,
        text: `Считать клики за определенное время`,   
    }
    
    constructor() {     
        super(ClicksModule.initialParams.type, ClicksModule.initialParams.text);
        this.#timeRequest();
         this.#clickCounts = {
             singleClick: 0,
             doubleClick: 0,
             wheelClick: 0,
         }
    }

    #finish() {
        const body = document.querySelector('body');
        const divMain = document.createElement('div');
        divMain.className = 'clicksAnalytics';
        const divClicksResult = document.createElement('div');
        divClicksResult.className = 'clicksAnalytics-div';
        const singleClicksResult = document.createElement('p');
        singleClicksResult.textContent = `Одинарных кликов было: ${this.#clickCounts.singleClick}`;
        const doubleClicksResult = document.createElement('p');
        doubleClicksResult.textContent = `Двойных кликов было: ${this.#clickCounts.doubleClick}`;
        const wheelClicksResult = document.createElement('p');
        wheelClicksResult.textContent = `Кликов на колесико было: ${this.#clickCounts.wheelClick}`;
        const allClicksResult = document.createElement('p');
        allClicksResult.textContent = `Всего кликов было: ${this.#clickCounts.singleClick + this.#clickCounts.doubleClick + this.#clickCounts.wheelClick}`;
        divClicksResult.append(singleClicksResult, doubleClicksResult, wheelClicksResult, allClicksResult);
        divMain.append(divClicksResult);
        body.append(divMain);
    }

    #timeRequest() {
        const time = Number(prompt('Введите время для подсчета кликов:').trim());
        this.#time = time || ClicksModule.initialParams.time;
    }  
}