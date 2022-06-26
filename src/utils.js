export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
export const createWrapper = () => {
  const wrapper = document.createElement('div')
  wrapper.className = 'wrapper'
  wrapper.insertAdjacentHTML('beforeend', `
  <div class="icon-container"><i class="ic_close icon"></i></div>
  <p>select mode:</p>
  <div class="buttons__fotter buttons">
  <i class="ic_clock icon"></i>
  <i class="ic_timer icon"></i>
  </div>
  `)
  return wrapper
}
export const createContainer = wrapper => {
  const container = document.createElement('div')
  container.className = 'plugin-container'
  wrapper.prepend(container)
  return container
}
export const createClock = () => {
  if (document.querySelector('.time-units')) {
    const clockInterval = setInterval(
      () => {
        const date = new Date()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const units = [
          hours,
          minutes,
          seconds
        ]
        const trueUnits = units.map(unit => {
          if (unit < 10) {
            unit = `0${unit}`
          }
          return unit
        })
        if (document.querySelector('.time-units')) {
          document.querySelector('.time-units').innerText = `${trueUnits[0]} : ${trueUnits[1]} : ${trueUnits[2]}`
        } else {
          clearInterval(clockInterval)
        }
      },
      1000
    )
  }
}
export const timerHandleClick = () => {
  const playBtn = document.getElementById('btn')
  const timer = document.querySelector('.timer')
  const time = timer.querySelector('.time')
  const timerBtns = timer.querySelectorAll('button')
  const timeInputs = Array.from(timer.querySelectorAll('input'))
  timer.querySelector('i').click()
  timer.querySelector('i').click()
  let allTime = []
  let totalTime = 5
  timeInputs.forEach(input => input.addEventListener('input', (event) => {
    const timeValues = timeInputs.map(input => input.value)
    const [days, hours, minutes] = timeValues
    const currentInput = event.target.className
    switch (currentInput) {
      case 'input input-days':
        totalTime = 5
        const day = {
          type: 'day',
          value: + days * 86400
        }
        if (allTime.findIndex(item => item.type === 'day') !== -1) {

          allTime[allTime.findIndex(item => item.type === 'day')] = day
        } else {
          allTime.push(day)
        }
        break;
      case 'input input-hours':
        totalTime = 0
        const hour = {
          type: 'hour',
          value: + hours * 3600
        }
        if (allTime.findIndex(item => item.type === 'hour') !== -1) {

          allTime[allTime.findIndex(item => item.type === 'hour')] = hour
        } else {
          allTime.push(hour)
        }
        break;
      case 'input input-minutes':
        totalTime = 0
        const minute = {
          type: 'minute',
          value: + minutes * 60
        }
        if (allTime.findIndex(item => item.type === 'minute') !== -1) {
          allTime[allTime.findIndex(item => item.type === 'minute')] = minute
        } else {
          allTime.push(minute)
        }
        break;
      default:
        break;
    }
    if (totalTime === 0) {
      totalTime = allTime.reduce((acc, item) => {
        acc += item.value
        return acc
      }, 0)
    } else if (totalTime > 0) {
      totalTime += allTime.reduce((acc, item) => {
        acc += item.value
        return acc
      }, 0)
    } else {
      totalTime = 0
    }
    console.log()
    console.log(totalTime)
  }))
  timerBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      if (totalTime > 0) {
        const button = event.target.id
        switch (button) {
          case "1":
            const myTimer = setInterval(() => {
              timeInputs.forEach(input => input.setAttribute('disabled', 'true'))
              totalTime--
              if (totalTime > 0) {
                playBtn.setAttribute('disabled', 'true')
                secondsToTime(totalTime, time)
              } else {
                clearInterval(myTimer)
                time.innerText = '0'
                timeInputs.forEach(input => input.value = null)
                totalTime = 0
                timeInputs.forEach(input => {
                  input.removeAttribute('disabled')
                  input.removeAttribute('value')
                })
                playBtn.removeAttribute('disabled')
                console.log(totalTime)

              }
              timer.querySelector('.ic_pause').onclick = () => {
                clearInterval(myTimer)
                playBtn.removeAttribute('disabled')
              }
              timer.querySelector('.ic_refresh').onclick = () => {
                clearInterval(myTimer)
                playBtn.removeAttribute('disabled')
                allTime = []
                time.innerText = '0'
                totalTime = 0
                timeInputs.forEach(input => {
                  input.value = null
                  input.removeAttribute('disabled')
                })
              }
            }, 1000)
          default:
            break;
        }
      } else {
        time.textContent = "введите время отсчета"
      }
    })
  })
}
function secondsToTime(timeSeconds, timeContainer) {
  const days = Math.floor(timeSeconds / 86400)
  const hours = Math.floor((timeSeconds % 86400) / 3600)
  const minutes = Math.floor((timeSeconds % 3600) / 60)
  const seconds = timeSeconds % 60
  const arr = [
    days,
    hours,
    minutes,
    seconds
  ]
  const trueArr = arr.map(item => {
    if (item < 10) {
      item.toString()
      item = `0${item}`
    } else {
      item.toString()
    }
    return item
  })
  timeContainer.textContent = `${trueArr[0]}d : ${trueArr[1]}h : ${trueArr[2]}m : ${trueArr[3]}s`

}

}

export function getRandomColor() {
  const colors = [
    "skyblue",
    "yellow",
    "green",
    "#c1c1c1",
    "orange",
    "lime",
    "aqua",
    "fuchsia",
  ];
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
