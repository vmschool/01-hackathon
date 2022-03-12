import { Module } from '../../core/module';

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    toHTML() {
        return super.toHTML();
    }
    trigger() {
        return new Promise(() => {
            let time;
            const menuTimer = document.querySelector("[data-type = 'timer']");
            menuTimer.addEventListener('click', () => {
                time = this.getTime();
                console.log(time);

                // Создание блока времени отсчета
                const timeCount = document.createElement('div');
                timeCount.textContent = `До завершения таймера осталось ${time} сек`;
                document.body.appendChild(timeCount);

                // Таймер отсчета используя декремент (--) с шагом в 1000 мс
                setInterval(() => {
                    timeCount.textContent = `До завершения таймера осталось ${--time} сек`;
                }, 1000);

                // Удаление таймера и вывод сообщения об окончании
                setTimeout(() => {
                    document.body.removeChild(timeCount);
                }, time * 1000);
            });
        });
    }

    // Получение времени от пользователя и проверка на валидность
    getTime() {
        let userTime = +prompt('Укажите время в секундах');
        if (isNaN(userTime)) {
            alert('Введите корректное число');
            this.getTime();
        } else {
            return userTime;
        }
    }
}
