import {Module} from '../core/module'

export class ClicksModule extends Module {
    #counter
    #doubleCounter
    #timer
    #isActivated
    constructor(type = 'clicksModule', text = 'считать клики (за 5 сек.)', timer=5000) {
        super(type,text);
        this.#counter = this.#doubleCounter = 0;
        this.#timer = timer;
        this.#isActivated = false;
        this.#init();
    }
    #init(){
        console.log('инициализация модуля подсчета кликов')
        document.addEventListener('click', ()=>{
            if(this.#isActivated) this.#counter++
        })
        document.addEventListener('dblclick', ()=>{
            if(this.#isActivated) this.#doubleCounter++
        })
    }
    trigger() {
        if(!this.#isActivated){
            console.log('trigger модуля кликов запущен и отсчет начался ' + this.#timer)
            this.#counter = this.#doubleCounter = 0;
            const $h1 = this.#getH1()
            $h1.innerText = 'Осталось сек: '
            $h1.insertAdjacentHTML('beforeend', `<span>${this.#timer/1000}</span>`)
            const $timer = $h1.firstElementChild
            let interval = setInterval(function() {
                let current = Number.isInteger(Number($timer.textContent)) ? Number($timer.textContent) : 0
                $timer.innerText = --current;
            }, 1000)
            setTimeout(()=>{
                clearInterval(interval);
                this.#isActivated = false;
                $h1.textContent = `Ваш результат: ${this.#counter} кликов, из них двойных ${this.#doubleCounter}`;
                }, this.#timer)
            this.#isActivated = true;
        }else console.warn('Прошлый подсчет еще не закончен')

    }
    #getH1(){
        document.querySelector('h1') ? document.querySelector('h1').innerText = '' : document.body.append(document.createElement('h1'))
        return document.querySelector('h1')
    }

}