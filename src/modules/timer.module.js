import { Module } from '../core/module';

export class TimerModule extends Module {
    #container;
    #timerHTML;
    #time;
    constructor() {
        super('timer', 'Таймер');
        this.#container = document.querySelector('.container');
        this.#timerHTML = document.createElement('div');
        this.#time = 0;
      }
      trigger(){
          let timerVal = prompt('Введите кол-во секунд для таймера:');
          timerVal=Number(timerVal.trim());
          if(timerVal){
              this.#initTimerHtml();
            this.#time = timerVal;
            const countDown = setInterval(()=>{
                if(this.#time>0){
                    this.#timerHTML.textContent = this.#time;
                    this.#time--;
                  }else{
                    clearTimeout(countDown);
                    this.#timerHTML.textContent = "Время вышло!";
                  }
              }, 1000);
          }else{
              alert('Не корректное значение!');
          }



      }
      #initTimerHtml(){
        this.#timerHTML.className = "timer";
          this.#container.append(this.#timerHTML);

      }
}