export function set_timer() { //Установка таймера + создание элемента для его отображения
    let timerElement = document.createElement('div');
    timerElement.className = 'display-remain-time';
    timerElement.style.color = 'red';
    timerElement.style.position = 'absolute';
    timerElement.style.bottom = 0;
    timerElement.style.left = 0;
    document.body.append(timerElement);
    let result = parseInt(prompt('На сколько установить таймер?', 30), 10);    
    if (isNaN(result)) {
        alert('Введите корректное число для таймера');
        return;
    }
    let remainTime = Date.now() + (result*1000)
    intervalTimer = setInterval(function(){
        timeLeft = Math.round((remainTime - Date.now()) / 1000);
        if(timeLeft < 0){
          clearInterval(intervalTimer);
          timerElement.remove();
          alert('Пора пить кофе');
          return ;
        }
        displayTimeLeft(timeLeft);
      }, 1000);
}

export function displayTimeLeft (timeLeft){ // отображение таймера
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    let timerE = document.querySelector('.display-remain-time');
    timerE.textContent = displayString;
  }

