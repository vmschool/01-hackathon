let seconds = 5;
function timer() {
    let minutesLeft = Math.floor(seconds / 60);
    let secondsLeft = seconds % 60;

    function pad(n) {
        return (n < 10 ? "0" + n : n);
    }

    const bodyTag = document.querySelector('body');
    const divTag = document.createElement('div');
    bodyTag.append(divTag);
    divTag.className = 'timer';
    const timerDiv = document.querySelector('.timer');
    timerDiv.style.width = '300px';
    timerDiv.style.textAlign = 'center';
    timerDiv.style.margin = '0 auto';
    timerDiv.style.color = '#ffff00';
    timerDiv.style.border = '2px dashed #ffff00';
    timerDiv.style.borderRadius = '15px';
    timerDiv.style.backgroundColor = '#868611';
    timerDiv.style.padding = '20px';
    timerDiv.style.fontSize = '25px';

    timerDiv.innerHTML = `${pad(minutesLeft)} : ${pad(secondsLeft)}`;

    if (seconds == 0) {
        clearInterval(countdownTimer);
        timerDiv.innerHTML = "Таймер завершён!";

        setTimeout(delDiv, 3000);

        function delDiv() {
            timerDiv.remove();
        }

    } else {
        seconds--;
    }
}

let countdownTimer = setInterval('timer()', 1000);