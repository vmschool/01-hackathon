import {Module} from '../core/module'

export class TimerModule extends Module {

 trigger() {

    let time = Number(prompt('Put your time in secundes'))
    if(!time || time>60) {
        alert('Your time is wrong')
        
    }else {
        const timeEl = document.createElement('div')
        const body =document.querySelector('body')
        timeEl.className = 'timeEl'
        body.append(timeEl)
         
        setInterval(decreaseTime,1000)
            
        function decreaseTime() {
            if (time=== 0){
                finishTimer()
            } else {
                let current = --time
                if (current<10) {
                    current = `0${current}`
                   }
                setTime(current)
            }
        }
        function setTime(value){
            timeEl.innerHTML = `00:${value}`
        }
        
         function finishTimer(){
          timeEl.parentNode.classList.add('hide')  
         }
    }
    
 }
}
