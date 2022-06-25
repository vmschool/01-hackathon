import { Module } from '../core/module';

export class TimerModule extends Module {
  trigger() {
    console.log('trigger TimerModule');

    //Скрытие контекстного меню после выбора триггера
    const menuHTML = document.querySelector('#menu')
    menuHTML.classList.remove('open')
    ///




    //Удаление уже существующего инпута таймера
    const timerInputFormHTML = document.querySelector('.timer-input_form')
    if(timerInputFormHTML) {
      timerInputFormHTML.remove()
    }
    ///

    //Создание нового инпута таймера
    const inputTimerForm = document.createElement('form')
    inputTimerForm.className = 'timer-input_form'
    document.body.append(inputTimerForm)

    const timerLabel = document.createElement('label')
    timerLabel.className = 'timer-label'
    timerLabel.textContent = 'HH:mm:ss'

    const timerInput = document.createElement('input')
    timerInput.id = 'timer-input'
    timerInput.type = 'time'
    timerInput.step = '1'
    timerInput.value = '00:00:00'
    timerInput.name = 'timerInput'
    timerLabel.append(timerInput)

    const submitButton = document.createElement('button')
    submitButton.className = 'timer-button'
    submitButton.type = 'submit'
    submitButton.textContent = 'Старт'

    const canselButton = document.createElement('button')
    canselButton.className = 'cansel-button'
    canselButton.type = 'cansel'
    canselButton.textContent = 'Отмена'

    inputTimerForm.append(timerLabel, timerInput, submitButton, canselButton)
    ///




    //Вешаем слушателя для инпут таймера
    const inputTimerHTML = document.querySelector('.timer-input_form')
    inputTimerHTML.addEventListener('submit', (event) => {
      event.preventDefault()

      const {target} = event
      const timerValue = target.timerInput.value
      const values = timerValue.split(':')
      const numberValues = []
      values.forEach((value) => { numberValues.push(Number(value)) })
      console.log(numberValues)
      inputTimerHTML.classList.add('hidden')

      const initialAmountMilliseconds = numberValues[0] * 60 * 60 * 1000 + numberValues[1] * 60 * 1000 + numberValues[2] * 1000
      console.log(initialAmountMilliseconds)

      //Реализация обратного отсчета таймера
      function timer(num) {
        let date = new Date(num - 3*60*60*1000)
        console.log(date)

        const timerContainerHTML = document.querySelector('.timer-container')
        if(timerContainerHTML) {
          timerContainerHTML.remove()
        }


        const timerContainer = document.createElement('div')
        timerContainer.className = 'timer-container'

        const timerSpan = document.createElement('span')
        timerSpan.className = 'timer-span'
        timerSpan.textContent = date.toString().slice(16, 24)

        document.body.append(timerContainer)
        timerContainer.append(timerSpan)


        if(num >= 0) {
            setTimeout(timer, 1000, num - 1000)
        } else {
          alert('Таймер завершен!')
          const timerContainerHTML = document.querySelector('.timer-container')
          timerContainerHTML.remove()
        }
      }
      setTimeout(timer, 1000, initialAmountMilliseconds)
      ///

    })
    //Реализация логинки кнопки отмены инпута
    const canselButtonHTML = document.querySelector('.cansel-button')
    canselButtonHTML.addEventListener('click',(event) => {
      event.preventDefault()
      const tomerInputFormHTML = document.querySelector('.timer-input_form')
      tomerInputFormHTML.classList.add('hidden')
    })
    ///


  }
}