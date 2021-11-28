import {Module} from '../core/module'

export class Timer extends Module {
    trigger() {
      const timer = document.createElement('div')
      timer.classList = 'timer'
      timer.innerHTML = `      
          <div class="timer__background">
          <div class="timer__close"></div>
            <div class="timer__display">
              <div class="display minute"></div>
              <span class="display colon">:</span>
              <div class="display seconds"></div>
            </div>
          </div>
          <div class="timer-input">
            <div class="input__container">
              <label for="inp-minute">Minutes</label>
              <input type="text" id="inp-minute" placeholder="0" />
            </div>
            <div class="input__container">
              <label for="inp-seconds">Seconds</label>
              <input type="text" id="inp-seconds" placeholder="0" />
            </div>
          </div>
          <div class="btn-group">
            <button class="start">start</button>
            <button class="reset">reset</button>
          </div>
          <audio class="audio" src="https://soundbible.com/mp3/service-bell_daniel_simion.mp3" type="audio/mp3"></audio>
        `
      document.querySelector('body').prepend(timer)
  
      // getting Display minutes and seconds elements
      const disMinutes = document.querySelector(".minute")
      const disSeconds = document.querySelector(".seconds")
      const timerDisplay = document.querySelector(".timer__display")
      // getting input minutes and seconds elements
      const inpMinutes = document.querySelector("#inp-minute")
      const inpSeconds = document.querySelector("#inp-seconds")
      // getting all the button
      const start = document.querySelector(".start")
      const reset = document.querySelector(".reset")
      const timerClose = document.querySelector(".timer__close")
      // getting audio
      const music = document.querySelector(".audio")
      // Additional Variables
      disMinutes.innerHTML = "00"
      disSeconds.innerHTML = "00"
      // making the timer
      let interval;
      let totalTime;
  
      const textCorrection = (element, value) => {
        element.innerHTML = value < 10 ? "0" + value : value;
      }
  
      timerClose.addEventListener("click", () => {
        timer.remove()
      })
  
      start.addEventListener("click", () => {
        music.play()
        totalTime = inpMinutes.value * 60 + inpSeconds.value * 1
        if (inpMinutes.value != "" || inpSeconds.value != "") {
          interval = setInterval(() => {
            const minutes = Math.floor(totalTime / 60);
            const seconds = totalTime % 60
  
            textCorrection(disMinutes, minutes);
            textCorrection(disSeconds, seconds);
  
            if (totalTime > 0) {
              totalTime--;
              reset.addEventListener("click", () => {
                disMinutes.innerHTML = "00"
                disSeconds.innerHTML = "00"
                inpMinutes.value = ''
                inpSeconds.value = ''
                clearInterval(interval)
              })
            } 
            else {
              clearInterval(interval)
              music.play()
              console.log (music)
              timerDisplay.remove()
              start.remove()
              timer.innerHTML = `<p class="end_time">
                    time is over</p>`    
              setTimeout(() => timer.remove(), 5000)
            }
          }, 1000);
        }
        else {
          disMinutes.innerHTML = "00"
          disSeconds.innerHTML = "00"
        }
        return totalTime;
      });
    }
}