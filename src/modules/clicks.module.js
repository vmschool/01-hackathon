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


    #timeRequest() {
        const time = Number(prompt('Введите время для подсчета кликов:').trim());
        this.#time = time || ClicksModule.initialParams.time;
    }  
}